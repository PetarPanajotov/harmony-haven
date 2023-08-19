const { Router } = require('express');
const { postRegister, postLogin, getMe, postLogout } = require('../controllers/auth');
const { getDestinations, postDestination, getOneDestination, putEditDestination, deleteDestination } = require('../controllers/destination');
const { postHotel, getHotels, getOneHotel } = require('../controllers/hotel');
const { postReview, getReviews, getUserHasLeftReview, getOneReview, putEditReview } = require('../controllers/review');
const { checkAuth } = require('../middlewares/auth');

const router = Router();

router.post('/register', postRegister);
router.post('/login', postLogin);
router.post('/logout', postLogout);
router.get('/me', getMe);

router.get('/destinations', getDestinations);
router.get('/destinations/:id', getOneDestination);
router.post('/destinations', postDestination);
router.put('/destinations/:id', putEditDestination);
router.delete('/destinations/:id', deleteDestination);


router.post('/:id/hotels', postHotel);
router.get('/:id/hotels', getHotels);
router.get('/hotels/:id', getOneHotel)

router.get('/:id/reviews/check-user', checkAuth(), getUserHasLeftReview);
router.get('/:id/reviews', getReviews);
router.get('/reviews/:id', getOneReview)
router.put('/reviews/:id', putEditReview)
router.post('/:id/reviews', checkAuth(), postReview);


module.exports = router;    