const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        unique: true
    },
    hotelLocation: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    freeDate: {
        type: Number,
    }
});
module.exports = mongoose.model('Hotel', hotelSchema)