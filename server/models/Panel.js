class Panel {
    constructor(image, name, max_power_KW, price, lifetime, degradation_rate_percent_over_warranty_years, maintenance_yearly, installation_cost) {
        this.image = image;
        this.name = name;
        this.max_power_KW = max_power_KW;
        this.price = price;
        this.lifetime = lifetime;
        this.power_percentage_after_warrenty_years = degradation_rate_percent_over_warranty_years;
        this.maintenance_yearly_dollars = maintenance_yearly;
        this.installation_cost_dollar = installation_cost;
    }
}

module.exports = { Panel };
