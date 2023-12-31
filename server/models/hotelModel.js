const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const {ratingChecker} = require('../utils/reviewRatingUtils')

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
    price: {
        type: Number,
        required: true
    },
    freeRooms: {
        type: Number,
    },
    description: {
        type: String,
        required:  true
    },
    reviews: [{
        type: ObjectId,
        ref: 'Review'
    }]
}, {
    timestamps: true
});
//virtual property to calculate the rating based of the reviews
hotelSchema.virtual('rating').get(function() {
    if(this.reviews.length === 0) {
        return 0;
    }
    const sum = this.reviews.reduce((total, review) => total + review.rating, 0);
    return (sum / this.reviews.length).toFixed(1)
});

hotelSchema.virtual('grade').get(function() {
    if(this.reviews.length === 0) {
        return "N/A";
    }
    const grade = ratingChecker(this.rating);
    return grade;
})
hotelSchema.virtual('reviewsCount').get(function() {
    const reviewsCount = this.reviews.length;
    return reviewsCount;
})
//this include virtual properties in the returned data as Object.
hotelSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Hotel', hotelSchema)