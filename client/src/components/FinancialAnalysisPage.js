import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Message, Icon } from 'semantic-ui-react';

const FinancialAnalysisPage = ({ formData }) => {

  //console.log(formData.latitude);

  return (
    <Container style={{ paddingTop: '10rem' }}>
      <Segment color="yellow" padded="very" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '1000px' }}>
        <Header as="h2" textAlign="center">
          <Icon name="calculator" color="yellow" />
          Cost Analysis
        </Header>
        <Message>
          <Message.Header>Cost Analysis Summary</Message.Header>
          <p><strong>Location:</strong> {1}, {1}</p>
          <p><strong>Tower Energy Consumption Per Day:</strong> {1} kWh</p>
          {/* Add more details based on the analysis */}
        </Message>
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
