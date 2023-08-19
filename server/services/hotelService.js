const { findDestinationById, findHotelById, findAndEditHotel, findAndDeleteHotel } = require("../utils/dbFunctionsUtils")
const Hotel = require("../models/hotelModel");
const Review = require("../models/reviewModel");

exports.createHotel = async (id, hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description) => {
    const destination = await findDestinationById(id);
    const newHotel = new Hotel({ hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description });
    await newHotel.save();
    destination.hotels.push(newHotel._id);
    await destination.save();
    return newHotel;
};

exports.hotels = async (destinationId) => {
    const destination = await findDestinationById(destinationId)
    .sort({ createdAt: -1 })
    .populate({
        path: 'hotels',
        populate: {
            path: 'reviews'
        }
    })
        //as the idea is to not include reviews, since they are not shown in the page. Remove this piece of code below, if you want to include it.
        .then((destination) => destination.toObject());

    destination.hotels.forEach(hotel => {
        hotel.reviews = undefined;
    });

    return destination;
};

exports.editHotel = async(hotelId, hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description) => {
    const hotel = await findAndEditHotel(hotelId, {hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description}).populate('reviews')
        .then((hotelBSON) => hotelBSON.toObject())
    hotel.reviews = undefined;
    return hotel
};

exports.findHotel = async (hotelId) => {
    const oneHotel = await findHotelById(hotelId).populate('reviews')
        .then((hotel) => hotel.toObject());
    oneHotel.reviews = undefined;
    return oneHotel;
};
exports.removeHotel = async(hotelId) => {
    const hotel = findAndDeleteHotel(hotelId)
    return hotel;
}
