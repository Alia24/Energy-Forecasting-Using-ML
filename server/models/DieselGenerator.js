class DieselGenerator {
    ;
    constructor(name, image, price, power_watt, maintainance_yearly, lifetime, installation_cost, litres_per_day) {
        this.image = image;
        this.name = name;
        this.price = price; // Price of the generator (e.g., in USD)
        this.power_watt = power_watt; // Power output in watts
        this.maintenance_yearly_dollar = maintainance_yearly; // Yearly maintenance cost (e.g., in USD)
        this.lifetime = lifetime;
        this.litres_per_day = litres_per_day;
    }
}

module.exports = { DieselGenerator };
