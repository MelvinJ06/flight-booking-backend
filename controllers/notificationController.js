// backend/controllers/notificationController.js

const NotificationService = require('../services/notificationService'); // Make sure this service exists

// Send notification
const sendNotification = async (req, res) => {
    const { message, recipient } = req.body;
    try {
        // Logic to send the notification
        await NotificationService.sendNotification(message, recipient);
        res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get notifications
const getNotifications = async (req, res) => {
    try {
        // Logic to get notifications
        const notifications = await NotificationService.getNotifications();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    sendNotification,
    getNotifications,
};
