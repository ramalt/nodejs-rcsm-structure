const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 150
    },
    salePrice: {
        type: Number,
        required: true,
        min: 1
    },
    desc: {
        type: String,
        required: false,
        maxLenght: 300
    },
},
    {
        writeConcern: {
            j: true,
            wtimeout: 1000
        }
    });

module.exports = mongoose.model('product', productSchema);