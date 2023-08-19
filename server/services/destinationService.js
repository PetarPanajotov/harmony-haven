const Destination = require('../models/destinationModel');
const { findAllDestinations,
        findMatchingDestinations,
        findDestinationById,
        findAndEditDestination,
        findAndDeleteDestination,
        findDestinationsWithPagination
    } = require('../utils/dbFunctionsUtils');

exports.destinations = async(search, offset, limit) => {
    if(search) {
        const matchingDestinations = await findMatchingDestinations(search)
        return matchingDestinations;
    } else if(offset, limit){
        const matchingDestinations = await findDestinationsWithPagination(offset, limit);
        return matchingDestinations
    }
    const allDestinations = await findAllDestinations().sort({ createdAt: -1 });
    return allDestinations;
}

exports.createDestination = async(destinationName, destinationLocation, imgURL) => {
    //validation
    const newDestination = new Destination({destinationName, destinationLocation, imgURL});
    await newDestination.save()
    return newDestination;
};

exports.findDestination = async(destinationId) => {
    const oneDestination = await findDestinationById(destinationId);
    return oneDestination;
};

exports.editDestination = async (destinationId, destinationName, destinationLocation, imgURL) => {
    const editedDestination = await findAndEditDestination(destinationId, destinationName, destinationLocation, imgURL);
    return editedDestination;
};
exports.removeDestination = async (destinationId) => {
    const deletedDestiantion = await findAndDeleteDestination(destinationId);
    return deletedDestiantion;
}