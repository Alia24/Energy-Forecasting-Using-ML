import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';
import VerticalNavBarContainer from '../../containers/VerticalNavBarContainer';
import HorizontalNavBarContainer from '../../containers/HorizontalNavBarContainer';
import OverviewPageContent from '../OverviewPageContent/OverviewPageContent';
import SolarDataInputPage from '../SolarDataInputPage';
import { getNearbyRandomNumber } from '../../lib/random';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'overview'
    };

    this.updateInputRadiancesInterval = null;
    this.updateStoredEnergiesInterval = null;
  }

  componentDidMount() {
    this.updateInputRadiancesInterval = setInterval(this.updateInputRadiances, 4000);
    this.updateStoredEnergiesInterval = setInterval(this.updateStoredEnergies, 4000);
  }

  componentWillUnmount() {
    if (this.updateInputRadiancesInterval) clearInterval(this.updateInputRadiancesInterval);
    if (this.updateStoredEnergiesInterval) clearInterval(this.updateStoredEnergiesInterval);
  }

  updateInputRadiances = () => {
    const newInputRadiancesByPanelId = [];
    this.props.panels.forEach((panel) => {
      newInputRadiancesByPanelId[panel.id] = getNearbyRandomNumber(0, 1, panel.inputRadianceKWM2, 0.05);
    });
    this.props.updateInputRadiances(newInputRadiancesByPanelId);
  }

  updateStoredEnergies = () => {
    const newStoredEnergiesByBatteryId = [];
    this.props.batteries.forEach((battery) => {
      newStoredEnergiesByBatteryId[battery.id] = getNearbyRandomNumber(0, battery.energyCapacityKWh, battery.storedEnergyKWh, 0.25);
    });
    this.props.updateStoredEnergies(newStoredEnergiesByBatteryId);
  }

  hideSidebarIfVisible = () => {
    if (this.props.sidebarVisible === true) {
      this.props.toggleSidebarVisibility();
    }
  }

  handlePageChange = (pageName) => {
    this.setState({ currentPage: pageName });
  }

  renderCurrentPage() {
    switch (this.state.currentPage) {
      case 'overview':
        return <OverviewPageContent />;
      case 'solarInput':
        return <SolarDataInputPage />;
      // Add other cases for different pages
      default:
        return <OverviewPageContent />;
    }
  }

  render() {
    return (
      <Sidebar.Pushable>
        <VerticalNavBarContainer 
          toggleSidebarVisibility={this.props.toggleSidebarVisibility}
          onPageChange={this.handlePageChange}
        />
        <Sidebar.Pusher onClick={this.hideSidebarIfVisible} dimmed={this.props.sidebarVisible}>
          <HorizontalNavBarContainer 
            toggleSidebar={this.props.toggleSidebarVisibility}
            onPageChange={this.handlePageChange}
          />
          {this.renderCurrentPage()}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

App.propTypes = {
  batteries: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
  toggleSidebarVisibility: PropTypes.func.isRequired,
  updateInputRadiances: PropTypes.func.isRequired,
  updateStoredEnergies: PropTypes.func.isRequired
};

export default App;