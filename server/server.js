const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// const OldSystemCostCalculator = require('./models/oldSystemCostCalculator');
// const NewSystemCostCalculator = require('./models/newSystemCostCalculator');
const energyRoutes = require('./routes/energyRoutes');

// load env variables
dotenv.config();

const app= express();
const PORT = process.env.PORT;

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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));

app.use('/api/energy', energyRoutes);

app.listen(PORT, () => {
    console.log("Server is running...");
});