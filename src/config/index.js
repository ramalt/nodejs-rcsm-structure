require('dotenv').config();

const config = {
    port: parseInt(process.env['PORT']),
    mongoUri: process.env['MONGO_DB_URL'],
    nodeEnv: process.env['NODE_ENV'],
    jwtKey: process.env['JWT_KEY']
}

module.exports = config;