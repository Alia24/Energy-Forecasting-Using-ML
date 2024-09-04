import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Segment, Table, Icon } from 'semantic-ui-react';

const FinancialAnalysisPage = ({ formData }) => {

  console.log(formData);

  return (
    <Container style={{ paddingTop: '5rem' }}>
      <Segment color="yellow" padded="very" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Header as="h2" textAlign="center" style={ { marginBottom: "40px", marginLeft: "-20px" } }>
          <Icon name="calculator" color="yellow" />
          Cost Analysis
        </Header>
        
        <Grid columns={2} divided>
          {/* Old System Data */}
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Old System Cost
            </Header>
            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell><strong>Generator Cost</strong></Table.Cell>
                  <Table.Cell>$10,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Lead Acid Batteries Cost</strong></Table.Cell>
                  <Table.Cell>$5,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Fuel Cost (Annual)</strong></Table.Cell>
                  <Table.Cell>
                    <Icon name="chart line" />
                    $15,000
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Total Expected Cost (Annual)</strong></Table.Cell>
                  <Table.Cell>$30,000</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>

          {/* New System Data */}
          <Grid.Column>
            <Header as="h3" textAlign="center">
              New System Cost
            </Header>
            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell><strong>Solar Panels Cost</strong></Table.Cell>
                  <Table.Cell>$20,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Inverters Cost</strong></Table.Cell>
                  <Table.Cell>$8,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Batteries Cost</strong></Table.Cell>
                  <Table.Cell>$6,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Total Maintenance Cost (Annual)</strong></Table.Cell>
                  <Table.Cell>$4,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Installation Cost</strong></Table.Cell>
                  <Table.Cell>$10,000</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
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
