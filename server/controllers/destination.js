const { destinations } = require("../services/destinationService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.getDestinations = async (req, res) => {
    const search = req.query;
    try {
        const data = await destinations(search);
        res.status(200)
            .send(data);
    } catch (error) {
        res.status(404)
            .send(ErrorMessage(error));
    };
};