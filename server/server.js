const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// const processDataRoutes = require('./routes/energyRoutes');

// Use the new route
// app.use('/api/energy/calculate', processDataRoutes);

// const OldSystemCostCalculator = require('./models/oldSystemCostCalculator');
// const NewSystemCostCalculator = require('./models/newSystemCostCalculator');
// const energyRoutes = require('./routes/energyRoutes');
const {UserInputs} = require("./models/UserInputs");
const {FuelPriceCalculator} = require("./models/FuelPriceCalculator");
const {OldSystemCostCalculator} = require("./models/oldSystemCostCalculator");
const {NewSystemCostCalculator} = require("./models/newSystemCostCalculator");

// load env variables
dotenv.config();

const app= express();
const PORT = 5000;

app.use(express.json());

app.use(cors()); //to allow cross-origin requests
// app.use(bodyParser.json()); //parse application/json

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.get('/api', (req, res) => {
    const filePath = path.join(__dirname, 'api.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the file');
            return;
        }
        res.json(JSON.parse(data));
    });
});


// const { Panel } = require('models/Panel');
// const { Inverter } = require('models/Inverter');
// const { Battery } = require('models/Battery');
// const { UserInputs } = require('../models/UserInputs');
// const { NewSystemCostCalculator } = require('../models/newSystemCostCalculator');
// const { OldSystemCostCalculator } = require('../models/oldSystemCostCalculator');
// const { FuelPriceCalculator } = require('../models/FuelPriceCalculator');


const router = express.Router();

// router.post('/solar', getSolarEnergyData);

function read(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}
app.post('/api/energy/calculate', (req, res) => {
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

    let old = new OldSystemCostCalculator(undefined, user_input, fuel_calculator, generator, panel.lifetime, 6000)
    let New = new NewSystemCostCalculator(panel, inverter, battery, user_input)

    res.json({
        "old_system" : old.get_details_of_old_system(),
        'new_system' : New.get_details_of_new_system()
    });
});


// app.use('/api/energy/calculate', energyRoutes);

app.listen(PORT, () => {
    console.log("Server is running...");
});