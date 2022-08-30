const { request } = require('express');
const config = require('../../config');
const { jwtVerify } = require('../../util/jwt');
const logger = require('../../util/logger');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwtVerify(token, config.jwtKey)
    req.user = decoded;
    next();

}