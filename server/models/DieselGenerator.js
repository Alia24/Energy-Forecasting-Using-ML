class DieselGenerator {
    constructor(name, image, efficiency, emissions_per_year, backup_time, price, power_watt, maintainance_yearly, lifetime, installation_cost) {
        this.image = image;
        this.name = name;
        this.emissions_per_year = emissions_per_year; // Emissions rate per year (e.g., in kg CO2/year)
        this.price = price; // Price of the generator (e.g., in USD)
        this.power_watt = power_watt; // Power output in watts
        this.maintenance_yearly = maintainance_yearly; // Yearly maintenance cost (e.g., in USD)
        this.lifetime = lifetime;
        this.installation_cost_dollar = installation_cost;

    }
}

module.exports = { DieselGenerator };
