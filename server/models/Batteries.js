class Batteries {
    constructor(price, capacity, depth_of_discharge, maintenance_yearly, warranty) {
        this.price = price; // Price of the battery (e.g., in USD)
        this.capacity = capacity; // Capacity of the battery (e.g., in kWh)
        this.depth_of_discharge = depth_of_discharge; // Maximum depth of discharge (e.g., percentage)
        this.maintenance_yearly = maintenance_yearly; // Yearly maintenance cost (e.g., in USD)
        this.warranty = warranty; // Warranty period (e.g., in years)
    }
}