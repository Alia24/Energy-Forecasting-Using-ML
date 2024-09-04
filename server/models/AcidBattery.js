class AcidBattery {
    constructor(name, image, price, lifetime, maintenance_yearly_dollar) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.lifetime = lifetime;
        this.maintenance_yearly_dollar = maintenance_yearly_dollar;
    }
}

module.exports = { AcidBatteries: AcidBattery };
