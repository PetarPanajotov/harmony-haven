const { Router } = require('express');
const { postRegister, postLogin, getMe, postLogout } = require('../controllers/auth');
const { getDestinations } = require('../controllers/destination');

const router = Router();

router.post('/register', postRegister);
router.post('/login', postLogin);
router.post('/logout', postLogout);
router.get('/me', getMe);

router.get('/destinations', getDestinations);

module.exports = router;