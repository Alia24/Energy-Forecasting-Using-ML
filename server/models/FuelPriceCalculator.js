class FuelPriceCalculator{
    constructor(price_avg_last_12_month_dollar) {
        this.price_avg_last_12_month = price_avg_last_12_month_dollar;
    }

    #stable_price(years, litre_consumption_avg_per_day){
        return years * 365 * this.price_avg_last_12_month * litre_consumption_avg_per_day;
    }
    get_total_cost_of_fuel_over_x_years(years, litre_consumption_avg_per_day){
        return this.#stable_price(years, litre_consumption_avg_per_day)
    }
}

x = new FuelPriceCalculator(1)
console.log(x.get_total_cost_of_fuel_over_x_years(25, 1))

module.exports = FuelPriceCalculator;