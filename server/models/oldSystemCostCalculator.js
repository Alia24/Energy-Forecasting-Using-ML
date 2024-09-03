// old system cost calculator model
// This model calculates the total cost of the old system over a period of time

// const mongoose = require('mongoose');
const FuelPriceCalculator = require('./FuelPriceCalculator');

class OldSystemCostCalculator {
    constructor(acidBatteryCost, dieselGeneratorCost, fuelPriceCalculator) {
        this.acidBatteryCost = acidBatteryCost;
        this.dieselGeneratorCost = dieselGeneratorCost;
        this.fuelPriceCalculator = fuelPriceCalculator;
    }

    calculateTotalCost(years, litre_consumption_avg_per_day, numberOfAcidBatteries) {
        //calculate the total cost of acid batteries
        const totalAcidBatteryCost = this.acidBatteryCost * numberOfAcidBatteries;

        //calculate the total cost of fuel using the fuel price calculator
        const totalFuelCost = this.fuelPriceCalculator.get_total_cost_of_fuel_over_x_years(years, litre_consumption_avg_per_day);

        // sum all costs
        const totalCost = totalAcidBatteryCost + this.dieselGeneratorCost + totalFuelCost;

        return totalCost;
    }
}

// Example usage:
// const fuelPriceCalculator = new FuelPriceCalculator(1);
// const oldSystemCostCalculator = new OldSystemCostCalculator(100, 500, fuelPriceCalculator);
// console.log(oldSystemCostCalculator.calculateTotalCost(25, 1, 10));


// const oldSystemCost = new mongoose.Schema({
//     totalCost: Number,
// });

// const OldSystem = mongoose.model('OldSystem', oldSystemCost);

// module.exports = OldSystem;