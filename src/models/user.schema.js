const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    mail: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
},
    {
        writeConcern: {
            j: true,
            wtimeout: 1000
        }
    });

module.exports = mongoose.model('user', userSchema);