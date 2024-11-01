const paymentConfig = require('../config/paymentConfig');
const stripe = require('stripe')(paymentConfig.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error('Payment processing error: ' + error.message);
    }
};

module.exports = {
    createPaymentIntent,
};
