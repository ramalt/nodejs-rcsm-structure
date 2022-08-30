const jwt = require('jsonwebtoken');


exports.jwtSign = (userMail, userId, secretKey) => {
    const payload = {
        userId: userId.userId,
        mail: userMail.mail
    };
    const options = {
        expiresIn: "1d"
    }
    try {
        const jwtToken = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        return jwtToken;
    } catch (error) {
        return error;
    }
};
exports.jwtVerify = (token, secretKey) => {
    jwt.verify(token, secretKey, (error, user) => {
        if (error) {
            throw error
        } else {
            return user
        }
    })
}