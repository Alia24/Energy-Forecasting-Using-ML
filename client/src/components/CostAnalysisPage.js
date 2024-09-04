import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Message, Icon } from 'semantic-ui-react';

const CostAnalysisPage = ({ data }) => {
  return (
    <Container style={{ paddingTop: '10rem' }}>
      <Segment color="yellow" padded="very" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '1000px' }}>
        <Header as="h2" color="#f9bc16" textAlign="center">
          <Icon name="calculator" color="yellow" />
          Cost Analysis
        </Header>
        <Message>
          <Message.Header>Cost Analysis Summary</Message.Header>
          <p><strong>Location:</strong> {data.latitude}, {data.longitude}</p>
          <p><strong>Tower Energy Consumption Per Day:</strong> {data.energyConsumption} kWh</p>
          {/* Add more details based on the analysis */}
        </Message>
      </Segment>
    </Container>
  );
};

CostAnalysisPage.propTypes = {
  data: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    energyConsumption: PropTypes.string.isRequired
  }).isRequired
};

export default CostAnalysisPage;
