import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
import palette from '../../lib/color';
import './PowerOutputChart.css';

class PowerOutputChart extends Component {
  constructor(props) {
    super(props);

    const xAxisLabel = 'Time';
    const yAxisLabel = 'kW';

    this.initialPointRadius = 2;
    this.powerLineLabel = 'Power Output';
    this.powerLineBackgroundColor = palette.lightGreen.setAlpha(0.1).toString();
    this.powerLineBorderColor = palette.lightGreen.toString();
    this.timeLabels = ['-5s', '', '', '', '', 'Now'];

    this.options = {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: xAxisLabel
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: yAxisLabel
          },
          ticks: {
            beginAtZero: true,
            suggestedMax: 0.5,
            stepSize: 0.1,
          }
        }]
      },
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0,
      },
      tooltips: {
        callbacks: {
          title: (tooltipItem, data) => {
            const datasetIndex = tooltipItem[0].datasetIndex;
            return data.datasets[datasetIndex].label;
          },
          label: (tooltipItem, data) => {
            const powerValue = tooltipItem.yLabel;
            return powerValue.toFixed(2) + ' kW';
          }
        }
      }
    };

    this.legend = {
      display: false
    };

    const initialTotalOutputPowerHistory = [null, null, null, null, null, null].map(() => {
      return PowerOutputChart.getTotalOutputPower(this.props.panels);
    });

    this.state = {
      totalOutputPowerHistory: initialTotalOutputPowerHistory,
      pointRadius: this.initialPointRadius
    };

    // Save the interval ID so it can be cleared later
    this.intervalId = setInterval(this.updateTotalOutputPowerHistory.bind(this), 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.intervalId);
  }

  updateTotalOutputPowerHistory() {
    this.setState((prevState, props) => {
      const totalOutputPowerHistory = prevState.totalOutputPowerHistory.concat();
      const totalOutputPower = PowerOutputChart.getTotalOutputPower(props.panels);
      totalOutputPowerHistory.shift();
      totalOutputPowerHistory.push(totalOutputPower);
      return {
        totalOutputPowerHistory: totalOutputPowerHistory
      };
    });
  }

  static getTotalOutputPower(panels) {
    return panels.reduce((accumulator, panel) => {
      const outputPowerW = panel.outputVoltageV * panel.outputCurrentA;
      const outputPowerKW = outputPowerW / 1000;
      return accumulator + outputPowerKW;
    }, 0);
  }

  render() {
    const data = {
      labels: this.timeLabels,
      datasets: [{
        label: this.powerLineLabel,
        data: this.state.totalOutputPowerHistory,
        backgroundColor: this.powerLineBackgroundColor,
        borderColor: this.powerLineBorderColor,
        borderWidth: 1,
        pointBackgroundColor: this.powerLineBorderColor,
        pointRadius: this.state.pointRadius,
        pointHoverRadius: this.state.pointRadius
      }]
    };

    return (
      <div className='power-output-chart--chart-wrapper'>
        <Line data={data} options={this.options} legend={this.legend}/>
      </div>
    );
  }
}

PowerOutputChart.propTypes = {
  panels: PropTypes.array.isRequired,
};

export default PowerOutputChart;
