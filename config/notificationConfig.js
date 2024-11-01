const nodemailer = require('nodemailer');

// Email configuration for sending notifications
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this to any email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = emailTransporter;