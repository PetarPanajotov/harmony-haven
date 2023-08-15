const Review = require("../models/reviewModel");
const { findHotelById } = require("../utils/dbFunctionsUtils");

exports.createReview = async (hotelId, rating, text) => {
    const hotel = await findHotelById(hotelId);
    const newReview = new Review({rating, text});
    await newReview.save();
    hotel.reviews.push(newReview._id);
    await hotel.save();
    return newReview;
 };