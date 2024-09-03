const PVWattsService = require('../services/pvwattsService');

const getSolarEnergyData = async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const solarData = await PVWattsService.getSolarData(latitude, longitude);
    res.status(200).json(solarData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSolarEnergyData,
};
