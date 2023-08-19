const { createHotel, hotels, findHotel, editHotel, removeHotel } = require("../services/hotelService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.postHotel = async (req, res) => {
    const { id } = req.params;
    const { hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description } = req.body;
    try {
        const data = await createHotel(id, hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description);
        res.status(201)
            .send(data);
    } catch (error) {
        res.status(400)
            .send(ErrorMessage(error));
    };
};

exports.getHotels = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await hotels(id)
        res.status(200)
            .send(data)
    } catch (error) {
        res.status(404)
            .send(ErrorMessage(error))
    };
};
exports.getOneHotel = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await findHotel(id)
        res.status(200)
            .send(data)
    } catch (error) {
        res.status(404)
            .send(ErrorMessage(error))
    };
};
exports.putEditHotel = async (req, res) => {
    const { id } = req.params;
    const { hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description } = req.body;
    try {
        const data = await editHotel(id, hotelName, hotelLocation, imgURL, stars, type, price, freeRooms, description)
        res.status(200)
            .send(data)
    } catch (error) {
        res.status(409)
            .send(ErrorMessage(error))
    };
};
exports.deleteHotel = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await removeHotel(id)
        res.status(200)
            .send(data)
    } catch (error) {
        res.status(409)
            .send(ErrorMessage(error))
    };
};