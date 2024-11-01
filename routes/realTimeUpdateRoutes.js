const express = require('express');
const router = express.Router();
const { getFlightStatus } = require('../controllers/realTimeUpdateController');

// Route to get flight status
router.get('/status', getFlightStatus);

module.exports = router;
