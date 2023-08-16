const { createReview } = require("../services/reviewService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.postReview = async(req, res) => {
    const { id } = req.params;
    const { _id: userId} = req.user

    const {rating, text} = req.body;
    try {
       const data = await createReview(id, rating, text, userId);
       res.status(201)
        .send(data)
    } catch(error) {
        res.status(400)
        .send(ErrorMessage(error));
    }
}