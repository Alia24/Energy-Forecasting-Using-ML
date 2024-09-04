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

    #get_panels_details() {

    }

    get_details_of_new_system(){
        let price = 0;
        price += this.#get_panels_details()
    }


}

module.exports = { NewSystemCostCalculator };
