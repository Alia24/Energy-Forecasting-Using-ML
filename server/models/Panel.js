class Panel {
    constructor(max_power_KW, efficiency_percentage, price, warranty_years, degradation_rate_percent_over_warranty_years, maintenance_yearly) {
        this.max_power_KW = max_power_KW;
        this.efficiency_percentage = efficiency_percentage;
        this.price = price;
        this.warranty_years = warranty_years;
        this.power_percentage_after_warrenty_years = degradation_rate_percent_over_warranty_years;
        this.maintenance_yearly_dollars = maintenance_yearly;
    }
}

module.exports = { Panel };
