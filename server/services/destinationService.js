const Destination = require('../models/destinationModel');

const findAllDestinations = () => Destination.find({});
const findMatchingDestinations = (query) => Destination.find({destinationName: { $regex: query, $options: 'i' } });
const findDestinationById = (destinationId) => Destination.findById(destinationId);
const findAndEditDestination = (destiantionId, destinationName, destinationLocation, imgURL) => Destination.findByIdAndUpdate(destiantionId, {destinationName, destinationLocation, imgURL}, {new:true})

exports.destinations = async(search) => {
    if(search['search']) {
        const query = search['search']
        const matchingDestinations = await findMatchingDestinations(query)
        return matchingDestinations;
    }
    const allDestinations = await findAllDestinations();
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
}