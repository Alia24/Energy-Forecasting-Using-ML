export class Inverter{
    constructor(name, image, price, efficiency, lifetime, maintenance_yearly) {
        this.image = image;
        this.name = name;
        this.price = price
        this.efficiency = efficiency
        this.lifetime = lifetime
        this.maintenance_yearly = maintenance_yearly
    }
}

module.exports = { Inverter };
