const { findDestinationById } = require("../utils/dbFunctionsUtils")
const Hotel = require("../models/hotelModel")

exports.createHotel = async (id, hotelName, hotelLocation, imgURL, stars, type, rating, freeDate) => {
   const destination = await findDestinationById(id);
   const newHotel = new Hotel({hotelName, hotelLocation, imgURL, stars, type, rating, freeDate});
   await newHotel.save();
   destination.hotels.push(newHotel._id);
   await destination.save();
   return newHotel;
};
exports.hotels = async (id) => {
   const destination = await findDestinationById(id).populate('hotels');
   return destination;
}