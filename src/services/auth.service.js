const { default: mongoose } = require("mongoose")
const User = require("../models/user.schema")
const { hash, compare } = require('../helpers/hash');
const logger = require('../util/logger');
const { jwtSign } = require('../util/jwt');
const config = require("../config");

const sign = async (userData) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        mail: userData.mail,
        //hash li parola
        password: await hash(userData.password),
    });

    try {
        logger.info('->[INFO] Auth Service : kullanici oluturma basarili, userid:' + user._id);
        await user.save(user);
        return user;
    } catch (error) {
        logger.error('->[ERR] Auth Service : kullanici olusturma basarisiz.');
        return Error('kullanici kayit hatasi')
    }
}
const login = async (userId, password) => {
    try {
        const user = await User.findById(userId)
        // console.log(user);
        const hash = user.password;//OK
        const comparedPass = await compare(password, hash);
        if (comparedPass) {
            const token = await jwtSign(user.mail, userId, config.jwtKey);
            logger.info('->[INFO] Auth Service : giris basarili, userid:' + user._id);
            return {user, token};
        } else {
            logger.error('->[ERR] Auth Service : giris basarisiz, userid:' + user._id);
        }
    } catch (error) {
        logger.error('->[ERR] Auth Service : kullanici girisi basarisiz.');
        throw Error('hata oluştu.')
    }
}


module.exports = {
    sign,
    login
}