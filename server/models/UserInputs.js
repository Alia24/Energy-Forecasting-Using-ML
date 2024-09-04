class UserInputs{
    constructor(longitude, latitude, energy_consumption_avg_per_day_KWh) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.energy_consumption_avg_per_day_KWh = energy_consumption_avg_per_day_KWh;
    }

}

module.exports = { UserInputs };
