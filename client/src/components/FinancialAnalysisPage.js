import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Segment, List, Icon } from 'semantic-ui-react';

const FinancialAnalysisPage = ({ formData }) => {
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
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="money" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Generator Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$10,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="battery full" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Lead Acid Batteries Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$5,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="chart line" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Fuel Cost (Annual)</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$15,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="calculator" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Total Expected Cost (Annual)</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$30,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
            </List>
          </Grid.Column>

          {/* New System Data */}
          <Grid.Column>
            <Header as="h3" textAlign="center">
              New System Cost
            </Header>
            <List>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="sun" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Solar Panels Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$20,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="plug" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Inverters Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$8,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="battery full" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Batteries Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$6,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="wrench" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Total Maintenance Cost (Annual)</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$4,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
              <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
                <Icon name="cogs" style={{ marginRight: '15px' }} />
                <List.Content style={{ flex: 1 }}>
                  <List.Header>Installation Cost</List.Header>
                </List.Content>
                <List.Content style={{ marginRight: '15px' }}>
                  <List.Description>$10,000</List.Description>
                </List.Content>
                <img src="https://via.placeholder.com/50" alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

FinancialAnalysisPage.propTypes = {
  formData: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    energyConsumption: PropTypes.string.isRequired
  }).isRequired
};

export default FinancialAnalysisPage;
