const amadeus = require('../config/amadeusConfig');


exports.getFlightStatus = async (req, res) => {
  try {
    const { flightNumber, date } = req.query;
    const response = await amadeus.schedule.flights.get({
      carrierCode: flightNumber.slice(0, 2), 
      flightNumber: flightNumber.slice(2), 
      scheduledDepartureDate: date
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight status', error: error.message });
  }
};
