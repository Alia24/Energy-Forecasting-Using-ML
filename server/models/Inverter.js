export class Inverter{
    constructor(name, image, price, efficiency, lifetime, maintenance_yearly, installation_cost) {
        this.image = image;
        this.name = name;
        this.price = price
        this.efficiency = efficiency
        this.lifetime = lifetime
        this.maintenance_yearly = maintenance_yearly
        this.installation_cost_dollar = installation_cost;
    }
}

module.exports = { Inverter };
