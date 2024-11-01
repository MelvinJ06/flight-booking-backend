const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
  try {
    const { bookingId, amount, paymentMethod } = req.body;

    const payment = new Payment({
      booking: bookingId,
      amount,
      paymentMethod
    });

    await payment.save();
    res.json({ message: 'Payment successful', payment });
  } catch (error) {
    res.status(500).json({ message: 'Payment processing failed' });
  }
};
