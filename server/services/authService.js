const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('../utils/jwtUtils');
const SECRET = process.env.SECRET || 'something'

const checkExistingUser = (email) => User.findOne({ email });
const checkExistingUserById = (id) => User.findById(id).select('-password -__v');
const comparePassword = (password, hashPassword) => bcrypt.compare(password, hashPassword);
const toJSON = (data) => { return JSON.parse(JSON.stringify(data)) }; //convert from bson to json
const removeImportantData = (data) => {
    const { password, __v, ...userData } = data;
    return userData;
};

exports.register = async (email, firstName, lastName, password, repeatPassword) => {
    if (await checkExistingUser(email)) {
        throw new Error('User with the same email already exist!');
    };
    if (password !== repeatPassword) {
        throw new Error('Password missmatch. Please try again!');
    };
    if (password.length < 6) {
        throw new Error('Password should be at least 6 character long!');
    };
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, firstName, lastName, password: hashedpassword });
    await newUser.save();
    return await this.login(email, password);
};

exports.login = async (email, password) => {
    let user = await checkExistingUser(email).exec();
    if (!user || !await comparePassword(password, user.password)) {
        throw new Error('Invalid email or password!');
    };
    const payload = { _id: user._id };
    const token = await jwt.signToken(payload, SECRET, { expiresIn: '2h' });
    user = toJSON(user);
    user = removeImportantData(user);
    return { token, user }
};

exports.me = async (token) => {
    if (!await jwt.verifyToken(token['auth'], SECRET)) {
        throw new Error(`Couldn't get info for your profile`)
    }
    const { _id } = jwt.decodeToken(token['auth'])
    const user = await checkExistingUserById(_id);
    return user;
};
