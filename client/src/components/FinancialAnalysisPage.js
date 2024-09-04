import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Segment, List, Icon } from 'semantic-ui-react';

const FinancialAnalysisPage = ({ analysisData }) => {
  const { old_system, new_system } = analysisData;

  // Calculate total costs
  const oldSystemTotalCost = old_system.generator.price + old_system.fuel.total_cost + old_system.maintenance_cost + old_system.installation_cost;
  const newSystemTotalCost = (new_system.battery.cost * new_system.battery.quantity) + 
                             (new_system.inverter.cost * new_system.inverter.quantity) + 
                             (new_system.panel.cost * new_system.panel.quantity) + 
                             new_system.battery.total_maintenance + 
                             new_system.inverter.total_maintenance;

  return (
    <Container style={{ paddingTop: '5rem' }}>
      <Segment color="yellow" padded="very" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Header as="h2" textAlign="center" style={{ marginBottom: "40px", marginLeft: "-20px" }}>
          <Icon name="calculator" color="yellow" />
          Cost Analysis
        </Header>
        
        <Grid columns={2} divided>
          {/* Old System Data */}
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Old System Cost
            </Header>
            <List>
              <List.Item style={{ marginBottom: "35px", display: 'flex', alignItems: 'center' }}>
                <Icon name="money" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Generator Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>${old_system.generator.price || 'N/A'}</List.Description>
                </List.Content>
                <img src={require('../assets/generator.webp')} alt={old_system.generator.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "40px", display: 'flex', alignItems: 'center' }}>
                <Icon name="chart line" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Fuel Cost (Annual)</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>${Math.round(old_system.fuel.total_cost)}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item style={{ marginBottom: "40px", display: 'flex', alignItems: 'center' }}>
                <Icon name="wrench" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Maintenance Cost (Annual)</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>${Math.round(old_system.maintenance_cost)}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item style={{ marginBottom: "20px", display: 'flex', alignItems: 'center' }}>
                <Icon name="cogs" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Installation Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>${Math.round(old_system.installation_cost)}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item style={{ marginTop: "40px", display: 'flex', alignItems: 'center', borderTop: '2px solid #f2711c', paddingTop: '20px' }}>
                <Icon name="dollar" style={{ marginRight: '15px' }} color="green" size="large" />
                <List.Content style={{ flex: 1 }}>
                  <List.Header as="h4" style={{ color: '#21ba45' }}>Total Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description as="h4" style={{ color: '#21ba45' }}>${Math.round(oldSystemTotalCost)}</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>

          {/* New System Data */}
          <Grid.Column>
            <Header as="h3" textAlign="center">
              New System Cost
            </Header>
            <List>
              <List.Item style={{ marginBottom: "18px", display: 'flex', alignItems: 'center' }}>
                <Icon name="battery full" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Battery Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description style={{ marginRight: '20px' }}>${Math.round(new_system.battery.cost)} (x{new_system.battery.quantity})</List.Description>
                </List.Content>
                <img src={`data:image/jpeg;base64,${new_system.battery.image}`} alt={new_system.battery.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "7px", display: 'flex', alignItems: 'center' }}>
                <Icon name="plug" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Inverter Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description style={{ marginRight: '45px' }}>${Math.round(new_system.inverter.cost)} (x{new_system.inverter.quantity})</List.Description>
                </List.Content>
                <img src={`data:image/jpeg;base64,${new_system.inverter.image}`} alt={new_system.inverter.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "22px", display: 'flex', alignItems: 'center' }}>
                <Icon name="sun" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Solar Panel Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description style={{ marginRight: '30px' }}>${Math.round(new_system.panel.cost)} (x{new_system.panel.quantity})</List.Description>
                </List.Content>
                <img src={`data:image/jpeg;base64,${new_system.panel.image}`} alt={new_system.panel.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="wrench" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Total Maintenance Cost (Annual)</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description style={{ marginRight: '123px' }} >${Math.round(new_system.battery.total_maintenance + new_system.inverter.total_maintenance)}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item style={{ marginTop: "40px", display: 'flex', alignItems: 'center', borderTop: '2px solid #f2711c', paddingTop: '20px' }}>
                <Icon name="dollar" style={{ marginRight: '15px' }} color="green" size="large" />
                <List.Content style={{ flex: 1 }}>
                  <List.Header as="h4" style={{ color: '#21ba45' }}>Total Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description as="h4" style={{ color: '#21ba45' }}>${Math.round(newSystemTotalCost)}</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

FinancialAnalysisPage.propTypes = {
  analysisData: PropTypes.shape({
    old_system: PropTypes.shape({
      fuel: PropTypes.shape({
        total_cost: PropTypes.number.isRequired,
        graphs: PropTypes.object
      }).isRequired,
      generator: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number
      }).isRequired,
      installation_cost: PropTypes.number.isRequired,
      maintenance_cost: PropTypes.number.isRequired
    }).isRequired,
    new_system: PropTypes.shape({
      battery: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        total_maintenance: PropTypes.number.isRequired
      }).isRequired,
      inverter: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        total_maintenance: PropTypes.number.isRequired
      }).isRequired,
      panel: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        lifetime: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default FinancialAnalysisPage;