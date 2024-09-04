const express = require('express');
const { getSolarEnergyData } = require('../controllers/energyController');

const { Panel } = require('../models/Panel');
const { Inverter } = require('../models/Inverter');
const { Battery } = require('../models/Battery');
const { UserInputs } = require('../models/UserInputs');
const { NewSystemCostCalculator } = require('../models/newSystemCostCalculator');
const { OldSystemCostCalculator } = require('../models/oldSystemCostCalculator');
const { FuelPriceCalculator } = require('../models/FuelPriceCalculator');


const router = express.Router();

// router.post('/solar', getSolarEnergyData);

function read(path){
    let output;
    fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    output = JSON.parse(data);

    });
    return output;
}

// Define the route to handle POST requests
router.post('/api/energy/calculate', (req, res) => {
    const { longitude, latitude, energy_consumption_avg_per_day_KWh } = req.body;

    if (longitude === undefined || latitude === undefined || energy_consumption_avg_per_day_KWh === undefined) {
        return res.status(400).json({ error: 'Please provide all three inputs' });
    }

    let user_input = new UserInputs(longitude, latitude, energy_consumption_avg_per_day_KWh);
    let panel = read("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\server\\Products\\Panel.json");
    let inverter = read("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\server\\Products\\Inverter.json");
    let battery = read("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\server\\Products\\Battery.json");
    let generator = read("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\server\\Products\\Generator.json");
    let fuel_calculator = new FuelPriceCalculator(0.2323, panel.lifetime, 0.07, generator.litres_per_day, 0.1, 0.015);

    res.json({
        "old_system" : new OldSystemCostCalculator(undefined, user_input, fuel_calculator, generator, panel.lifetime, 6000),
        'new_system' : new NewSystemCostCalculator(panel, inverter, battery, user_input)
    });
});

module.exports = router;
