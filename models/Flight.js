const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: String,
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
  availableSeats: Number
});

module.exports = mongoose.model('Flight', flightSchema);
