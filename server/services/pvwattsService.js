const axios = require('axios');

const getSolarData = async (latitude, longitude) => {
  const apiKey = process.env.PVWATTS_API_KEY;
  const url = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKey}&lat=${latitude}&lon=${longitude}&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10`;

  const response = await axios.get(url);
  return response.data;
};

module.exports = { getSolarData };
