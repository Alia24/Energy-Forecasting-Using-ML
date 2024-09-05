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
        let power_kwh = this.user_inputs.energy_consumption_avg_per_day_KWh * 1000 / 5;
        // console.log(power_kwh)
        let final = Math.ceil(power_kwh / (this.panel.max_power_KW * 0.9))
        // console.log(final);
        return final;
    }

    get_panels_cost(){
        return this.panel.price;
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
        let final = Math.ceil(((this.user_inputs.energy_consumption_avg_per_day_KWh * 2 ) / this.battery.capacity) * (this.panel.lifetime / this.battery.lifetime))
        // console.log(final);
        console.log(this.user_inputs)
        return final;
    }

    get_battery_cost(){
        return this.battery.price;
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
        return Math.ceil(this.panel.lifetime / this.inverter.lifetime);
    }

    get_inverter_cost(){
        return this.inverter.price;
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
