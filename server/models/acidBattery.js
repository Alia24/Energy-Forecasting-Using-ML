const mongoose = require('mongoose');

const acidBatterySchema = new mongoose.Schema({
    maintenanceCostPerYear: Number,
    price: Number,
});

const AcidBattery = mongoose.model('AcidBattery', acidBatterySchema);

module.exports = AcidBattery;