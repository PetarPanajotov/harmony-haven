const { createReview } = require("../services/reviewService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.postReview = async(req, res) => {
    const { id } = req.params;
    const {rating, text} = req.body;
    try {
       const data = await createReview(id, rating, text);
       res.status(201)
        .send(data)
    } catch(error) {
        res.status(400)
        .send(ErrorMessage(error));
    }
}