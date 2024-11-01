const Flight = require('../models/Flight');


exports.searchFlights = async (req, res) => {
  try {
    const { departure, arrival, date } = req.query;
    const flights = await Flight.find({ departure, arrival, date });
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flights' });
  }
};
