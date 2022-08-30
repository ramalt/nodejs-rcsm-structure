const app = require("./api/app");
const http = require('http');
const logger = require('./util/logger');
const config = require('./config/index');



const server = http.createServer(app);

server.listen(config.port, () => {

    if (server.listen) {
        logger.log('info','server http://127.0.0.1:' + config.port + ' adresinde baslatildi.');
    }
})


