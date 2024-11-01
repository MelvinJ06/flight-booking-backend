const express = require('express');
const router = express.Router();
const { getFlightStatus } = require('../controllers/realTimeUpdateController');

router.get('/status', getFlightStatus);

module.exports = router;
