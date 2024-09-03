class FuelPriceCalculator{
    constructor(price_last_12_month_avg_per_litre_dollar, years_of_consumption, litre_consumption_avg_per_day, avg_yearly_price_increase_percentage_adjusted_for_inflation) {
        this._price_last_12_month_avg_per_litre_dollar = price_last_12_month_avg_per_litre_dollar;
        this._years_of_consumption = years_of_consumption;
        this._litre_consumption_avg_per_day = litre_consumption_avg_per_day;
        this._avg_yearly_price_increase_percentage_adjusted_for_inflation = avg_yearly_price_increase_percentage_adjusted_for_inflation;
        this._consumption_avg_per_year_litre = this._litre_consumption_avg_per_day * 365;
    }

    #geometric_series_compound_interest_calculator(yearly_increase){
        return (this._price_last_12_month_avg_per_litre_dollar * this._consumption_avg_per_year_litre *
            ( ((1 + yearly_increase) ** this._years_of_consumption) - 1) /
            ((1 + yearly_increase) - 1))
    }

    #traditional_senario_analysis_with_premium_risk(pessimistic_risk_percentage, base_risk_percentage, optimistic_risk_percentage){
        let base_case = this.#geometric_series_compound_interest_calculator(base_risk_percentage);
        let optimistic_case = this.#geometric_series_compound_interest_calculator(optimistic_risk_percentage);
        let pessimistic_case = this.#geometric_series_compound_interest_calculator(pessimistic_risk_percentage);
        return [pessimistic_case, base_case, optimistic_case]
    }

    #monte

    get_total_cost_of_fuel(){
        let senario_analysis = this.#traditional_senario_analysis_with_premium_risk(0.1, this._avg_yearly_price_increase_percentage_adjusted_for_inflation, 0.015);
        let average = 0
        for (const senario of senario_analysis) {
            average += senario;
        }
        return average * 1.1 / 3; // avergae of scenarios times 1.1 to make a room for mistakes
    }
}

// realistic values are 0.217, 25, 48, 0.07
module.exports = FuelPriceCalculator;