const { createHotel } = require("../services/hotelService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.postHotel = async (req, res) => {
    const { id } = req.params;
    const { hotelName, hotelLocation, imgURL, stars, type, rating, freeDate } = req.body;
    console.log(id)
    console.log(hotelName, hotelLocation, imgURL, stars, type, rating, freeDate)
    try {
        const data = await createHotel(id, hotelName, hotelLocation, imgURL, stars, type, rating, freeDate);
        res.status(201)
            .send(data);
    } catch(error) {
        res.status(400)
            .send(ErrorMessage(error));
    };
};