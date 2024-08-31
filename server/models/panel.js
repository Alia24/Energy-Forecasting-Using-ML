const mongoose = require('mongoose');

const panelSchema = new mongoose.Schema({
    maxGeneration: Number,
    efficiency: Number,
    price: Number,
    warranty: Number,
    degradationRate: Number,
    maintenanceCostPerYear: Number,
});

const Panel = mongoose.model('Panel', panelSchema);

module.exports = Panel;