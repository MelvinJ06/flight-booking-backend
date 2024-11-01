const Booking = require('../models/Booking');
const Flight = require('../models/Flight');

exports.createBooking = async (req, res) => {
  try {
    const { flightId, userId, seats } = req.body;
    const flight = await Flight.findById(flightId);

    if (!flight) return res.status(404).json({ message: 'Flight not found' });

    const booking = new Booking({
      flight: flightId,
      user: userId,
      seats
    });

    await booking.save();
    res.json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking' });
  }
};
