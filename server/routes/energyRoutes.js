const express = require('express');
const { getSolarEnergyData } = require('../controllers/energyController');

const router = express.Router();

router.post('/solar', getSolarEnergyData);

module.exports = router;
