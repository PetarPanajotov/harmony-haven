const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    destinationName: {
        type: String,
        required: true,
        unique: true
    },
    destinationLocation: {
        type: String,
        required: true,
        unique: true
    },
    imgURL: {
        type: String,
        require: true,
        unique: true
    },
    offersCount: {
        type: Number
    },
    popular: {
        type: Boolean
    }
});
module.exports = mongoose.model('Destination', destinationSchema)