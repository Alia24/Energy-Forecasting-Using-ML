const mongoose = require('mongoose');

const acidBatterySchema = new mongoose.Schema({
    maintenanceCostPerYear: Number,
    price: Number,
});

const AcidBatteries = mongoose.model('AcidBatteries', acidBatterySchema);

module.exports = AcidBatteries;