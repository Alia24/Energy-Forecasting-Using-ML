class Battery {
    constructor(name, image, price, capacity, depth_of_discharge, maintenance_yearly, lifetime, installation_cost) {
        this.image = image;
        this.name = name;
        this.price = price; // Price of the battery (e.g., in USD)
        this.capacity = capacity; // Capacity of the battery (e.g., in kWh)
        this.depth_of_discharge = depth_of_discharge; // Maximum depth of discharge (e.g., percentage)
        this.maintenance_yearly = maintenance_yearly; // Yearly maintenance cost (e.g., in USD)
        this.lifetime = lifetime; // Warranty period (e.g., in years)
        this.installation_cost_dollar = installation_cost;
    }
}

module.exports = { Battery };
