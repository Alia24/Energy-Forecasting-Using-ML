const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const processDataRoutes = require('./routes/energyRoutes');

// Use the new route
app.use('/api/energy/calculate', processDataRoutes);

// const OldSystemCostCalculator = require('./models/oldSystemCostCalculator');
// const NewSystemCostCalculator = require('./models/newSystemCostCalculator');
const energyRoutes = require('./routes/energyRoutes');

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


app.use('/api/energy', energyRoutes);

app.listen(PORT, () => {
    console.log("Server is running...");
});