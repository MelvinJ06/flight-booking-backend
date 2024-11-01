const amadeus = require('../config/amadeusConfig');

// Fetch real-time flight status based on flight number and date
exports.getFlightStatus = async (req, res) => {
  try {
    const { flightNumber, date } = req.query;

    // Call the Amadeus API to get flight status
    const response = await amadeus.schedule.flights.get({
      carrierCode: flightNumber.slice(0, 2), // Example: 'AA' for American Airlines
      flightNumber: flightNumber.slice(2), // The actual flight number part
      scheduledDepartureDate: date
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight status', error: error.message });
  }
};
