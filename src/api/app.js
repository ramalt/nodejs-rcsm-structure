const express = require('express');

const bodyParser = require('body-parser');
const mongooseLoader = require('../loaders/mognoose');
const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');


const app = express();


//REQUEST HANDLERS
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
mongooseLoader.connect();



//ROUTERS
app.use('/products', productRouter);
app.use('/user', userRouter)

//ERROR HANDLING
app.use((req, res, next) => {
    const error = new Error('kusura bakma ya bulamadım:(');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: error.status,
        error: {
            message: error.message
        }
    });
});
module.exports = app;


