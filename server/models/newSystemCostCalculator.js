// new system cost calculator model
const { Panel } = require('./Panel');
const { Inverter } = require('./Inverter');
const { Battery } = require('./Battery');
const { UserInputs } = require('./UserInputs');

class NewSystemCostCalculator{
    constructor(panel, inverter, battery, user_inputs) {
        this.battery = battery
        this.panel = panel
        this.inverter = inverter
        this.user_inputs = user_inputs
    }


    get_panels_quantitiy(){
        // let wattage_per_hour = this.user_inputs.energy_consumption_avg_per_day_KWh / 5
        // return Math.ceil(this.user_inputs.energy_consumption_avg_per_day_KWh / this.panel.max_power_KW);
        return 58;
    }

    get_panels_cost(){
        return this.get_panels_quantitiy() * this.panel.price;
    }

    #get_panels_details() {
        return {
            image: this.panel.image,
            name: this.panel.name,
            cost: this.get_panels_cost(),
            quantity: this.get_panels_quantitiy(),
            lifetime: this.panel.lifetime,
            total_maintenance: this.panel.maintenance_yearly_dollars * this.panel.lifetime
        };
    }

    get_batteries_quantity(){
        return 30;
    }

    get_battery_cost(){
        return this.get_batteries_quantity() * (this.battery.price);
    }

    #get_battery_details(){
        return {
            image: this.battery.image,
            name: this.battery.name,
            cost: this.get_battery_cost(),
            quantity: this.get_batteries_quantity(),
            total_maintenance: this.battery.maintenance_yearly * this.panel.lifetime
        };
        }
    
    get_inverters_quantity(){
        return 2;
    }

    get_inverter_cost(){
        return this.inverter.price*this.get_inverters_quantity();
    }

    #get_inverter_details(){
        return {
            image: this.inverter.image,
            name: this.inverter.name,
            cost: this.get_inverter_cost(),
            quantity: this.get_inverters_quantity(),
            total_maintenance: this.inverter.maintenance_yearly * this.panel.lifetime
        };
    }

    get_details_of_new_system(){
        const panelDetails = this.#get_panels_details();
        const inverterDetails = this.#get_inverter_details();
        const batteryDetails = this.#get_battery_details();

        return {
            panel: panelDetails,
            inverter: inverterDetails,
            battery: batteryDetails
        };
    }

}

module.exports = { NewSystemCostCalculator };
