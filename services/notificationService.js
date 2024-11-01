
const sendNotification = async (message, recipient) => {
    console.log(`Sending notification to ${recipient}: ${message}`);
};

const getNotifications = async () => {
    return [
        { id: 1, message: 'Test notification 1', recipient: 'user@example.com' },
        { id: 2, message: 'Test notification 2', recipient: 'user@example.com' },
    ];
};

module.exports = {
    sendNotification,
    getNotifications,
};
