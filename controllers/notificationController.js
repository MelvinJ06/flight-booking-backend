

const NotificationService = require('../services/notificationService'); 


const sendNotification = async (req, res) => {
    const { message, recipient } = req.body;
    try {
        
        await NotificationService.sendNotification(message, recipient);
        res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNotifications = async (req, res) => {
    try {
        
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
