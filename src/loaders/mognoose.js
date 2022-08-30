const mongoose = require('mongoose');
const config = require('../config/index');
const logger = require('../util/logger');

module.exports.connect = () => {
    const connection = mongoose.connect(config.mongoUri);
    let db = mongoose.connection;

    db.on('open', (stream) => {
        // console.log('MongoDb hazir.');
        logger.info(' MongoDb baglantisi kuruldu.');
    })
    if (!db.error) {
        logger.error(' MongoDb baglanamadi.')
    }
    
    return connection;
}