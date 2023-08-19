const { destinations, createDestination, findDestination, editDestination, removeDestination } = require("../services/destinationService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.getDestinations = async (req, res) => {
    const {search, offset, limit} = req.query;
    try {
        const data = await destinations(search, offset, limit);
        res.status(200)
            .send(data);
    } catch (error) {
        res.status(404)
            .send(ErrorMessage(error));
    };
};

exports.postDestination = async (req, res) => {
    const { destinationName, destinationLocation, imgURL } = req.body;
    try {
        const data = await createDestination(destinationName, destinationLocation, imgURL);
        res.status(201)
            .send(data);
    } catch (error) {
        res.status(400)
            .send(ErrorMessage(error));
    };
};

exports.getOneDestination = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await findDestination(id);
        res.status(200)
            .send(data);
    } catch (error) {
        res.status(404)
            .send(ErrorMessage(error));
    };
};

exports.putEditDestination = async (req, res) => {
    const { id } = req.params;
    const { destinationName, destinationLocation, imgURL } = req.body;
    try {
        const data = await editDestination(id, destinationName, destinationLocation, imgURL)
        res.status(200)
            .send(data);
    }
    catch (error) {
        res.status(409)
            .send(ErrorMessage(error));
    };
};
exports.deleteDestination = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await removeDestination(id)
        res.status(200)
            .send(data)
    } catch (error) {
        res.status(409)
            .send(ErrorMessage(error));
    };
};