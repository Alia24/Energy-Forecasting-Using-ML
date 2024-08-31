const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// load env variables
dotenv.config();

const app= express();
const PORT = process.env.PORT;

// app.use(cors()); //to allow cross-origin requests
// app.use(bodyParser.json()); //parse application/json

app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));


app.listen(PORT, () => {
    console.log("Server is running...");
});