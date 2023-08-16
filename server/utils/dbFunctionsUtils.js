const Destination = require('../models/destinationModel')
const Hotel = require('../models/hotelModel');
const User = require('../models/userModel');
const findAllDestinations = () => Destination.find({});
const findMatchingDestinations = (query) => Destination.find({destinationName: { $regex: query, $options: 'i' } });
const findDestinationById = (destinationId) => Destination.findById(destinationId);
const findAndEditDestination = (destiantionId, destinationName, destinationLocation, imgURL) => Destination.findByIdAndUpdate(destiantionId, {destinationName, destinationLocation, imgURL}, {new:true})
const findAndDeleteDestination = (destiantionId) => Destination.findByIdAndDelete(destiantionId);
const findHotelById = (hotelId) => Hotel.findById(hotelId);
const findHotelByIdAndUpdate = (hotelId, options) => Hotel.findByIdAndUpdate(hotelId, options);
const findUserById = (userId) => User.findById(userId)
module.exports = {
    findAllDestinations,
    findMatchingDestinations,
    findDestinationById,
    findAndEditDestination,
    findAndDeleteDestination,
    findHotelById,
    findHotelByIdAndUpdate,
    findUserById
}