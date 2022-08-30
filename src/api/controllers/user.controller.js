const authService = require('../../services/auth.service');
const logger = require('../../util/logger');


exports.signIn = async (req, res) => {
    const userData = {
        mail: req.body.mail,
        password: req.body.password
    }
    try {
        const user = await authService.sign(userData);
        res.status(201).json({
            message: "succesfull",
            status: 201,
            methof: 'POST',
            user: user,
        })
        logger.http('-> [POST] 201 /user/signin');
    } catch (error) {
        res.status(500).json({
            message: "istek hatasi",
            detail: error
        });
        logger.error('-> [POST] 500 /user/signin');
    }



}
exports.login = async (req, res) => {
    const userId = req.body.kullaniciNo;
    const password = req.body.password;

    try {
        const result = await authService.login(userId, password);
        res.status(201).json({
            message: "succesfull",
            status: 201,
            methof: 'POST',
            userData: {
                mail: result.user.mail,
                userId: result.user._id,
                token: result.token,
                lastLogin: "1 ocak 2022 22:00 vs."
            },
        })
        logger.http('-> [POST] 201 /user/login');
    } catch (error) {
        res.status(500).json({
            message: "giris basarisiz",
            detail: error
        });
        logger.error('-> [POST] 500 /user/login');
    }
}