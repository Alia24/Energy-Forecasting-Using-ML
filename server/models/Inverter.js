export class Inverter{
    constructor(price, efficiency, lifetime, maintenance_yearly) {
        this.price = price
        this.efficiency = efficiency
        this.lifetime = lifetime
        this.maintenance_yearly = maintenance_yearly
    }
}

module.exports = { Inverter };
