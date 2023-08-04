const Destination = require('../models/destinationModel');

const findAllDestinations = () => Destination.find({})
const findMatchingDestinations = (query) => Destination.find({destinationName: { $regex: query, $options: 'i' } })

exports.destinations = async(search) => {
    if(search['search']) {
        const query = search['search']
        const matchingDestinations = await findMatchingDestinations(query)
        return matchingDestinations;
    }
    const allDestinations = await findAllDestinations();
    return allDestinations;
}