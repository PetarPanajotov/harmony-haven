const Destination = require('../models/destinationModel')

const findAllDestinations = () => Destination.find({});
const findMatchingDestinations = (query) => Destination.find({destinationName: { $regex: query, $options: 'i' } });
const findDestinationById = (destinationId) => Destination.findById(destinationId);
const findAndEditDestination = (destiantionId, destinationName, destinationLocation, imgURL) => Destination.findByIdAndUpdate(destiantionId, {destinationName, destinationLocation, imgURL}, {new:true})
module.exports = {
    findAllDestinations,
    findMatchingDestinations,
    findDestinationById,
    findAndEditDestination
}