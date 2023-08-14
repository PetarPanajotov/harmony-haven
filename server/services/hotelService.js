const { findDestinationById, findHotelById } = require("../utils/dbFunctionsUtils")
const Hotel = require("../models/hotelModel")

exports.createHotel = async (id, hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description) => {
   const destination = await findDestinationById(id);
   const newHotel = new Hotel({hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description});
   await newHotel.save();
   destination.hotels.push(newHotel._id);
   await destination.save();
   return newHotel;
};
exports.hotels = async (destinationId) => {
   const destination = await findDestinationById(destinationId).populate('hotels');
   return destination;
};
exports.findHotel = async(hotelId) => {
   const oneHotel = await findHotelById(hotelId);
   return oneHotel;
};
