// backend/routes/notificationRoutes.js

const express = require('express');
const { sendNotification, getNotifications } = require('../controllers/notificationController');

const router = express.Router();

// Route to send a notification
router.post('/send', sendNotification);

// Route to get notifications
router.get('/', getNotifications);

module.exports = router;
