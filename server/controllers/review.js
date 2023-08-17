const { createReview, reviews, doesUserLeftReview } = require("../services/reviewService");
const { ErrorMessage } = require("../utils/errorHandlerUtils");

exports.postReview = async(req, res) => {
    const { id } = req.params;
    const { _id: userId} = req.user;

    const {rating, text} = req.body;
    try {
       const data = await createReview(id, rating, text, userId);
       res.status(201)
        .send(data);
    } catch(error) {
        res.status(400)
        .send(ErrorMessage(error));
    };
};

exports.getReviews = async(req, res) => {
    const { id } = req.params;
    const { offset, limit } = req.query;
    try {
        const data = await reviews(id, offset, limit);
        res.status(200)
            .send(data);
    } catch(error) {
        res.status(404)
            .send(ErrorMessage(error));
    };
};

exports.getUserHasLeftReview = async(req, res) => {
    const {_id: userId} = req.user;
    try {
        const data = await doesUserLeftReview(userId);
        res.status(200)
            .send(data);
    } catch(error) {
        res.status(404)
            .semd(ErrorMessage(error));
    };
};