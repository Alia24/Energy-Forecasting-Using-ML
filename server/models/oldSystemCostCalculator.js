// old system cost calculator model
// This model calculates the total cost of the old system over a period of time

// const mongoose = require('mongoose');
const FuelPriceCalculator = require('./FuelPriceCalculator');

class OldSystemCostCalculator {
    constructor(acidBatteryCost, dieselGeneratorCost, fuelPriceCalculator, numberOfAcidBatteries = 4, numberOfDieselGenerators = 1, numberOfBatteries = 2) {
        this.acidBatteryCost = acidBatteryCost;
        this.dieselGeneratorCost = dieselGeneratorCost;
        this.fuelPriceCalculator = fuelPriceCalculator;
        this.numberOfAcidBatteries = numberOfAcidBatteries;
        this.numberOfDieselGenerators = numberOfDieselGenerators;
        this.numberOfBatteries = numberOfBatteries; // number of lithium batteries
    }


    calculateTotalCost(years, litre_consumption_avg_per_day, numberOfAcidBatteries) {
        //calculate the total cost of acid batteries
        const totalAcidBatteryCost = this.acidBatteryCost * numberOfAcidBatteries;

        //calculate the cost of diesel generators
        const totalDieselGeneratorCost = this.dieselGeneratorCost * this.numberOfDieselGenerators;

        //calculate the total cost of fuel using the fuel price calculator
        const totalFuelCost = this.fuelPriceCalculator.get_total_cost_of_fuel_over_x_years(years, litre_consumption_avg_per_day);

        // sum all costs
        const totalCost = totalAcidBatteryCost + totalDieselGeneratorCost + totalFuelCost;

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