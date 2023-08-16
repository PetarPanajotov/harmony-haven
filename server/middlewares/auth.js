const { findUserById } = require('../utils/dbFunctionsUtils');
const { ErrorMessage } = require('../utils/errorHandlerUtils');
const jwt = require('../utils/jwtUtils');
const SECRET = process.env.SECRET || 'something';

exports.checkAuth = () => {
    return async (req, res, next) => {
        const token = req.cookies || '';
        try {
            await jwt.verifyToken(token['auth'], SECRET)
                .then(async (decodedToken) => req.user = await findUserById(decodedToken._id))
            next()
        } catch (error) {
            if (['token expired', 'jwt must be provided'].includes(error.message)) {
                error.message = 'Invalid token'
                res.status(401)
                    .send(ErrorMessage(error))
            };
        }
    };
};