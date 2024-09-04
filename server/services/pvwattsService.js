const axios = require('axios');

const getSolarData = async (latitude, longitude, systemCapacity) => {
  const apiKey = process.env.PVWATTS_API_KEY;
  const url = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKey}&lat=${latitude}&lon=${longitude}&system_capacity=${systemCapacity}&azimuth=180&tilt=${latitude}&array_type=0&module_type=1&losses=15`;

  const response = await axios.get(url);
  return response.data;
};

module.exports = { getSolarData };
