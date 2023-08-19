const Review = require("../models/reviewModel");
const { findHotelByIdAndUpdate, findHotelById, findReviewByUserId, findReviewById, findAndEditReview } = require("../utils/dbFunctionsUtils");

exports.createReview = async (hotelId, rating, text, userId) => {
    const newReview = new Review({ rating, text, _ownerId: userId });
    await newReview.save();
    await findHotelByIdAndUpdate({ _id: hotelId }, { $push: { reviews: newReview._id } });
    return newReview.populate({
        path: '_ownerId',
        select: 'firstName lastName'
    });
};

exports.reviews = async (hotelId, offset, limit) => {
    const hotel = await findHotelById(hotelId).populate({
        path: 'reviews',
        options: {
            skip: offset,
            limit: limit,
            sort: { createdAt: -1 }
        },
        populate: {
            path: '_ownerId',
            model: 'User',
            select: 'firstName lastName'
        }
    });
    const reviews = hotel.reviews;
    return reviews;
};

exports.findReview = async (reviewId) => {
    const oneReview = await findReviewById(reviewId);
    return oneReview;
}

exports.editReview = async(reviewId, rating, text) => {
    const editedReview = await findAndEditReview(reviewId, rating, text).populate({
        path: '_ownerId',
        select: 'firstName lastName'
    });
    return editedReview
}

exports.doesUserLeftReview = async (userId, hotelId) => {
    const oneHotel = await findHotelById(hotelId).populate('reviews')
    const isReview = oneHotel.reviews.toObject().some(review => review._ownerId?.toString() === userId.toString())
    return isReview
};