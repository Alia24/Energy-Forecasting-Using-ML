import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Segment, List } from 'semantic-ui-react';
import ListItem from './ListItem'; // Import the ListItem component

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
              <ListItem 
                icon="money"
                header="Generator Cost"
                description="$10,000"
                imageSrc="https://via.placeholder.com/50" // Replace with actual image URL
              />
              <ListItem 
                icon="battery full"
                header="Lead Acid Batteries Cost"
                description="$5,000"
                imageSrc="https://via.placeholder.com/50" // Replace with actual image URL
              />
              <ListItem 
                icon="chart line"
                header="Fuel Cost (Annual)"
                description="$15,000"
                imageSrc="https://via.placeholder.com/50" // Replace with actual image URL
              />
              <ListItem 
                icon="calculator"
                header="Total Expected Cost (Annual)"
                description="$30,000"
                imageSrc="https://via.placeholder.com/50" // Replace with actual image URL
              />
            </List>
          </Grid.Column>

          {/* New System Data */}
          <Grid.Column>
            {/* Implement similar structure for the new system data */}
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
