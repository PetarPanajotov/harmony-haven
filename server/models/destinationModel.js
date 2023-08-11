const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

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
    },
    hotels: [{
        type: ObjectId,
        ref: "Hotel"
    }],
    popular: {
        type: Boolean
    }
});
module.exports = mongoose.model('Destination', destinationSchema)