const { AcidBatteries } = require('./AcidBattery');
const { DieselGenerator } = require('./DieselGenerator');
const { FuelPriceCalculator } = require('./FuelPriceCalculator');
const { UserInputs } = require('./UserInputs');


class OldSystemCostCalculator {
    constructor(acid_battery, user_input, fuel_price_calculator, diesel_generator, lifetime_years, installation_cost) {
        this._acid_battery = acid_battery;
        this._user_input = user_input;
        this._diesel_generator = diesel_generator;
        this._fuel_price_calculator = fuel_price_calculator;
        this._lifetime_years = lifetime_years;
        this._installation_cost = installation_cost;
    }

    #get_generator_details() {
        let generator_details = {};
        generator_details["name"] = this._diesel_generator.name;
        generator_details["image"] = this._diesel_generator.image;
        generator_details["quantity"] = Number(Math.ceil(this._lifetime_years / this._diesel_generator.lifetime));
        generator_details["price"] = generator_details["quantity"] * this._diesel_generator.price;
        return generator_details;
    }

    #get_acid_batteries_details() {
        let battery_details = {};
        battery_details["name"] = this._acid_battery.name;
        battery_details["image"] = this._acid_battery.image;
        battery_details["quantity"] = Math.ceil(this._lifetime_years / this._acid_battery._lifetime_years);
        battery_details["price"] = battery_details["quantity"] * this._acid_battery.price;
        return battery_details;
    }

    #get_fuel_cost() {
        return {"total_cost" : this._fuel_price_calculator.get_total_cost_of_fuel(),
                "graphs": this._fuel_price_calculator.generate_graphs()}
    }

    #get_maintenance_cost() {
        let maintenance_cost = 0;
        // maintenance_cost += this._acid_battery.maintenance_yearly_dollar;
        maintenance_cost += this._diesel_generator.maintenance_yearly_dollar;

        return maintenance_cost;
    }

    get_details_of_old_system() {
        let details_of_old_system = {};
        details_of_old_system["generator"] = this.#get_generator_details();
        // details_of_old_system["acid_batteries"] = this.#get_acid_batteries_details();
        details_of_old_system["fuel"] = this.#get_fuel_cost();
        details_of_old_system["maintenance_cost"] = this.#get_maintenance_cost();
        details_of_old_system["installation_cost"] = this._installation_cost;

        return details_of_old_system;
    }
}

module.exports = { OldSystemCostCalculator };