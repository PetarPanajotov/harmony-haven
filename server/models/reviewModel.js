const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    _ownerId: {
        type: ObjectId,
        ref: 'User'
    }
})
module.exports = mongoose.model('Review', reviewSchema)