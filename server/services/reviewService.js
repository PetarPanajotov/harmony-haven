const Review = require("../models/reviewModel");
const { findHotelByIdAndUpdate } = require("../utils/dbFunctionsUtils");

exports.createReview = async (hotelId, rating, text, userId) => {
    const newReview = new Review({rating, text, _ownerId: userId});
    await newReview.save();
    await findHotelByIdAndUpdate({_id: hotelId}, {$push: {reviews: newReview._id}});
    return newReview;
 };