const { AcidBatteries } = require('./AcidBattery');
const { DieselGenerator } = require('./DieselGenerator');
const { FuelPriceCalculator } = require('./FuelPriceCalculator');
const { UserInputs } = require('./UserInputs');


class OldSystemCostCalculator {
    constructor(acid_battery, user_input, fuel_price_calculator, diesel_generator, lifetime_years) {
        this.acid_battery = acid_battery;
        this.user_input = user_input;
        this.diesel_generator = diesel_generator;
        this.fuel_price_calculatorf = fuel_price_calculator;
        this.lifetime_years = lifetime_years;
    }

    #get_generator_details() {
        let generator_details = {};
        generator_details{}
    }

    get_details_of_new_system() {
        let details_of_old_system = {};

        let generator_details = this.#get_generator_details();

        details_of_old_system["generator"] = generator_details;

    }


}

module.exports = { FuelPriceCalculator };