class AcidBattery {
    constructor(name, image, price, lifetime, maintenance_yearly_dollar, installation_cost) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.lifetime = lifetime;
        this.maintenance_yearly_dollar = maintenance_yearly_dollar;
        this.installation_cost_dollar = installation_cost;
    }
}

module.exports = { AcidBatteries: AcidBattery };
