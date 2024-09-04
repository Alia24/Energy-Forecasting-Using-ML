class AcidBattery {
    constructor(price, lifetime, maintenance_yearly_dollar) {
        this.price = price;
        this.lifetime = lifetime;
        this.maintenance_yearly_dollar = maintenance_yearly_dollar;
    }
}

module.exports = { AcidBatteries: AcidBattery };
