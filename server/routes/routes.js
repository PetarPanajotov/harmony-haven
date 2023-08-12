const { Router } = require('express');
const { postRegister, postLogin, getMe, postLogout } = require('../controllers/auth');
const { getDestinations, postDestination, getOneDestination, putEditDestination } = require('../controllers/destination');
const { postHotel, getHotels } = require('../controllers/hotel');

const router = Router();

router.post('/register', postRegister);
router.post('/login', postLogin);
router.post('/logout', postLogout);
router.get('/me', getMe);

router.get('/destinations', getDestinations);
router.get('/destinations/:id', getOneDestination);
router.put('/destinations/:id', putEditDestination);
router.post('/destinations', postDestination);

router.post('/:id/hotels', postHotel);
router.get('/:id/hotels', getHotels);

module.exports = router;