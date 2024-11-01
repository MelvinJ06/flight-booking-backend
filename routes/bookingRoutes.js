const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createBooking } = require('../controllers/bookingController');

router.post('/', createBooking);
router.post('/', authMiddleware, createBooking);

module.exports = router;
