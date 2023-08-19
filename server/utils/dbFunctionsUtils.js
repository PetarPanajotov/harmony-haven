const Destination = require('../models/destinationModel')
const Hotel = require('../models/hotelModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel');

const findAllDestinations = () => Destination.find({});
const findMatchingDestinations = (query) => Destination.find({destinationName: { $regex: query, $options: 'i' } });
const findDestinationsWithPagination = (offset, limit) => Destination.find().sort({'createdAt': -1}).skip(offset).limit(limit)
const findDestinationById = (destinationId) => Destination.findById(destinationId);
const findAndEditDestination = (destiantionId, destinationName, destinationLocation, imgURL) => Destination.findByIdAndUpdate(destiantionId, {destinationName, destinationLocation, imgURL}, {new:true})
const findAndDeleteDestination = (destiantionId) => Destination.findByIdAndDelete(destiantionId);
const findHotelById = (hotelId) => Hotel.findById(hotelId);
const findHotelByIdAndUpdate = (hotelId, options) => Hotel.findByIdAndUpdate(hotelId, options);
const findAndEditHotel = (hotelId, data) => Hotel.findByIdAndUpdate(hotelId, data, {new: true});
const findAndDeleteHotel = (hotelId) => Hotel.findByIdAndDelete(hotelId);
const findUserById = (userId) => User.findById(userId);
const findReviewByUserId = (userId) => Review.findOne({_ownerId: userId});
const findReviewById = (reviewId) => Review.findById(reviewId);
const findAndEditReview = (reviewId, rating, text) => Review.findByIdAndUpdate(reviewId, {rating, text}, {new: true})
const findAndDeleteReview = (reviewId) => Review.findByIdAndDelete(reviewId);
module.exports = {
    findAllDestinations,
    findMatchingDestinations,
    findDestinationsWithPagination,
    findDestinationById,
    findAndEditDestination,
    findAndDeleteDestination,
    findHotelById,
    findHotelByIdAndUpdate,
    findAndDeleteHotel,
    findAndEditHotel,
    findUserById,
    findReviewByUserId,
    findReviewById,
    findAndEditReview,
    findAndDeleteReview
}