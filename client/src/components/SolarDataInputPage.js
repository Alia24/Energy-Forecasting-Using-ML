import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Container, 
  Form, 
  Input, 
  Button, 
  Header, 
  Segment, 
  Message,
  Icon
} from 'semantic-ui-react';

import FinancialAnalysisPage from './FinancialAnalysisPage';

const BASE_URL = "http://localhost:5000"

const SolarDataInputPage = () => {
  const [formData, setFormData] = useState({
    longitude: '',
    latitude: '',
    energy_consumption_avg_per_day_KWh: ''
  });
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [page, setPage] = useState("input");
  const [analysisData, setAnalysisData] = useState({});

  const handleInputChange = (e, { name, value }) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.latitude) tempErrors.latitude = 'Latitude is required';
    if (!formData.longitude) tempErrors.longitude = 'Longitude is required';
    if (!formData.energyConsumption) tempErrors.energyConsumption = 'Energy consumption is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch(`${BASE_URL}/api/energy/calculate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Unexpected error when fetching data.');
        }
  
        const data = await response.json();
        console.log(data.old_system)
        delete data.old_system.generator.image;
        setAnalysisData(data);
        setPage("analysis");
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  if (page === "analysis") {
    return <FinancialAnalysisPage analysisData={analysisData} />
  }

  return (
    <Container style={{ paddingTop: '4rem', height: "800px" }}>
      <Segment color="yellow" padded="very" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '1000px' }}>
        <Header as="h2" textAlign="center" style={{fontSize: "33px", marginLeft: "-70px"}}>
          <img src={require('../assets/SolarLink.png')} style={ {width: "150px", height: "150px", marginBottom: "20px", marginRight: "0px"} }/>
          <span style={ {'marginLeft': '-20px'} }>Solar Energy System Input</span>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field error={!!errors.latitude} >
            <label style={ {fontSize: "20px", marginBottom: "13px" } }><Icon name="sun" color="yellow" /> Latitude</label>
            <Input
              name="latitude"
              defaultValue={formData.latitude}
              onChange={handleInputChange}
              placeholder="Enter latitude"
              type="number"
              step="any"
              style={ { marginBottom: "16px" } }
            />
            {errors.latitude && <span style={{ color: 'red' }}>{errors.latitude}</span>}
          </Form.Field>
          <Form.Field error={!!errors.longitude}>
            <label style={ {fontSize: "20px", marginBottom: "13px" } }><Icon name="sun" color="yellow" /> Longitude</label>
            <Input
              name="longitude"
              defaultValue={formData.longitude}
              onChange={handleInputChange}
              placeholder="Enter longitude"
              type="number"
              step="any"
              style={ { marginBottom: "16px" } }
            />
            {errors.longitude && <span style={{ color: 'red' }}>{errors.longitude}</span>}
          </Form.Field>
          <Form.Field error={!!errors.energyConsumption}>
            <label style={ {fontSize: "20px", marginBottom: "13px" } }><Icon name="bolt" color="yellow" /> Tower Energy Consumption Per Day (kWh)</label>
            <Input
              name="energyConsumption"
              defaultValue={formData.energyConsumption}
              onChange={handleInputChange}
              placeholder="Enter tower energy consumption per day"
              type="number"
              step="any"
              style={ { marginBottom: "16px" } }
            />
            {errors.energyConsumption && <span style={{ color: 'red' }}>{errors.energyConsumption}</span>}
          </Form.Field>
          <Button type="submit" color="yellow" fluid style={{marginTop: '30px'}}>
            <Icon name="calculator" /> Calculate Equipment Needs
          </Button>
        </Form>

        {showSummary && (
          <Message positive>
            <Message.Header>Solar System Summary</Message.Header>
            <p><strong>Location:</strong> {formData.latitude}, {formData.longitude}</p>
            <p><strong>Tower Energy Consumption Per Day:</strong> {formData.energyConsumption} kWh</p>
          </Message>
        )}
      </Segment>
    </Container>
  );
};

// SolarDataInputPage.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

export default SolarDataInputPage;
