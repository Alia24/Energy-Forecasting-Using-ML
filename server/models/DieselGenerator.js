class DieselGenerator {
    constructor(efficiency, emissions_per_year, backup_time, price, powerWatts, maintenanceYearly) {
        this.efficiency = efficiency; // Efficiency of the generator (e.g., percentage)
        this.emissions_per_year = emissions_per_year; // Emissions rate per year (e.g., in kg CO2/year)
        this.backup_time = backup_time; // Backup time the generator can provide (e.g., in hours)
        this.price = price; // Price of the generator (e.g., in USD)
        this.powerWatts = powerWatts; // Power output in watts
        this.maintenanceYearly = maintenanceYearly; // Yearly maintenance cost (e.g., in USD)
    }
}