const { json } = require('express');
const jwtCallback = require('jsonwebtoken');
const util = require('util');

module.exports = {
    signToken: util.promisify(jwtCallback.sign),
    verifyToken: util.promisify(jwtCallback.verify),
    decodeToken: jwtCallback.decode
};