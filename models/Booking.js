const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seats: Number,
  bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
