const { register, login, me } = require("../services/authService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.postRegister = async (req, res) => {
    const { email, firstName, lastName, password, repeatPassword } = req.body;
    try {
        const data = await register(email, firstName, lastName, password, repeatPassword);
        if (process.env.NODE_ENV === 'production') {
            res.cookie('auth', data.token, { httpOnly: true, sameSite: 'none', secure: true });
        } else {
            res.cookie('auth', data.token, { httpOnly: true});
        }
        res.status(201)
            .send(data.user);
    } catch (error) {
        res.status(409)
            .send(ErrorMessage(error));
    };
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await login(email, password);
        if (process.env.NODE_ENV === 'production') {
            res.cookie('auth', data.token, { httpOnly: true, sameSite: 'none', secure: true });
        } else {
            res.cookie('auth', data.token, { httpOnly: true});
        }
        res.cookie('auth', data.token, { httpOnly: true, sameSite: 'none', secure: true });
        res.status(200)
            .send(data.user)
    } catch (error) {
        res.status(401)
            .send(ErrorMessage(error))
    }
}
exports.getMe = async (req, res) => {
    const token = req.cookies;
    try {
        if (Object.keys(token).length === 0) {
            return res.status(204).end()
        }
        const data = await me(token);
        res.status(200)
            .send(data)
    } catch (error) {
        res.clearCookie('auth');
        res.status(404)
            .send(ErrorMessage(error))
    };
};
exports.postLogout = async (req, res) => {
    const token = req.cookies;
    res.clearCookie('auth')
        .status(204)
        .send('Logged out!')
}