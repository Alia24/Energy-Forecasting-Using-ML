class FuelPriceCalculator{
    constructor(price_last_12_month_avg_per_litre_dollar, years_of_consumption,
                avg_yearly_price_increase_percentage_adjusted_for_inflation,
                _avg_litre_consumption_per_day,
                worst_case_avg_yearly_price_increase_percentage_adjusted_for_inflation,
                best_case_avg_yearly_price_increase_percentage_adjusted_for_inflation) {

        this._price_last_12_month_avg_per_litre_dollar = price_last_12_month_avg_per_litre_dollar;
        this._years_of_consumption = years_of_consumption;
        this._litre_consumption_avg_per_day = _avg_litre_consumption_per_day;
        this._avg_yearly_price_increase_percentage_adjusted_for_inflation = avg_yearly_price_increase_percentage_adjusted_for_inflation;
        this._consumption_avg_per_year_litre = this._litre_consumption_avg_per_day * 365;
        this._worst_case_avg_yearly_price_increase_percentage_adjusted_for_inflation = worst_case_avg_yearly_price_increase_percentage_adjusted_for_inflation;
        this._best_case_avg_yearly_price_increase_percengae_adjusted_for_inflation = best_case_avg_yearly_price_increase_percentage_adjusted_for_inflation;
    }

    #geometric_series_compound_interest_calculator(yearly_increase){
        return (this._price_last_12_month_avg_per_litre_dollar * this._consumption_avg_per_year_litre *
            ( ((1 + yearly_increase) ** this._years_of_consumption) - 1) /
            ((1 + yearly_increase) - 1))
    }

    #yearly_price_graph_maker(yearly_increase){
        const currentYear = new Date().getFullYear();
        let graph = {"start_year" : currentYear};
        let series = {};
        let power = 1;
        for (let i = currentYear; i <= currentYear + this._years_of_consumption; i++) {
            series[i] = this._price_last_12_month_avg_per_litre_dollar * power;
            power *= (1 + yearly_increase);
        }
        graph["price_series"] = series;
        return graph;
    }

    #traditional_senario_analysis_with_premium_risk(){
        let base_case = this.#geometric_series_compound_interest_calculator(this._worst_case_avg_yearly_price_increase_percentage_adjusted_for_inflation);
        let optimistic_case = this.#geometric_series_compound_interest_calculator(this._avg_yearly_price_increase_percentage_adjusted_for_inflation);
        let pessimistic_case = this.#geometric_series_compound_interest_calculator(this._best_case_avg_yearly_price_increase_percengae_adjusted_for_inflation);
        return [pessimistic_case, base_case, optimistic_case]
    }

    #monte

    get_total_cost_of_fuel(){
        let scenario_analysis = this.#traditional_senario_analysis_with_premium_risk();
        let average = 0
        for (const scenario of scenario_analysis) {
            average += scenario;
        }
        return average * 1.1 / 3; // avergae of scenarios times 1.1 to make a room for mistakes
    }

    generate_graphs(){
        let graphs = {};
        graphs["worst"] = this.#yearly_price_graph_maker(this._worst_case_avg_yearly_price_increase_percentage_adjusted_for_inflation);
        graphs["base"] = this.#yearly_price_graph_maker(this._avg_yearly_price_increase_percentage_adjusted_for_inflation);
        graphs["best"] = this.#yearly_price_graph_maker(this._best_case_avg_yearly_price_increase_percengae_adjusted_for_inflation);
        return graphs;
    }
}

module.exports = { FuelPriceCalculator };