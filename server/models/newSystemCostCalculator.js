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
        return Math.ceil(this.user_inputs.energy_consumption_avg_per_day_KWh / this.panel.max_power_KW);
    }

    get_panels_cost(){
        return this.get_panels_quantitiy() * (this.panel.price+this.panel.installation_cost_dollar);
    }

    #get_panels_details() {
        return {
            image: this.panel.image,
            name: this.panel.name,
            cost: this.get_panels_cost(),
            quantity: this.get_panels_quantitiy()
            // maxPowerKW: this.panel.max_power_KW,
            // efficiencyPercentage: this.panel.efficiency_percentage,
            // lifetime: this.panel.lifetime,
            // degradationRate: this.panel.power_percentage_after_warrenty_years,
            // maintenanceYearlyDollars: this.panel.maintenance_yearly_dollars
        };
    }

    get_batteries_quantity(){
        return Math.ceil(this.user_inputs.energy_consumption_avg_per_day_KWh / this.battery.capacity_KWh);
    }

    get_battery_cost(){
        return this.get_batteries_quantity() * (this.battery.price);
    }

    #get_battery_details(){
        return {
            image: this.battery.image,
            name: this.battery.name,
            cost: this.get_battery_cost(),
            quantity: this.get_batteries_quantity()
            // lifetime: this.battery.lifetime,
            // maintenanceYearlyDollars: this.battery.maintenance_yearly
        };
        }
    
    get_inverters_quantity(){
        return 1;
    }

    get_inverter_cost(){
        return this.inverter.price*this.get_inverters_quantity();
    }

    #get_inverter_details(){
        return {
            image: this.inverter.image,
            name: this.inverter.name,
            cost: this.get_inverter_cost(),
            num: this.get_inverters_quantity()
            // efficiency: this.inverter.efficiency,
            // lifetime: this.inverter.lifetime,
            // maintenanceYearlyDollars: this.inverter.maintenance_yearly
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
