import React, { useState } from 'react';
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

const SolarDataInputPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    energyConsumption: ''
  });
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSummary(true);
      onSubmit(formData);
    }
  };

  return (
    <Container style={{ paddingTop: '2rem' }}>
      <Segment color="yellow" padded="very" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Header as="h2" color="#2594ae" textAlign="center">
          <Icon name="sun" color="yellow" />
          Solar Energy System Input
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field error={!!errors.latitude}>
            <label><Icon name="sun" color="yellow" /> Latitude</label>
            <Input
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
              placeholder="Enter latitude"
              type="number"
              step="any"
            />
            {errors.latitude && <span style={{ color: 'red' }}>{errors.latitude}</span>}
          </Form.Field>
          <Form.Field error={!!errors.longitude}>
            <label><Icon name="sun" color="yellow" /> Longitude</label>
            <Input
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
              placeholder="Enter longitude"
              type="number"
              step="any"
            />
            {errors.longitude && <span style={{ color: 'red' }}>{errors.longitude}</span>}
          </Form.Field>
          <Form.Field error={!!errors.energyConsumption}>
            <label><Icon name="bolt" color="yellow" /> Tower Energy Consumption Per Day (kWh)</label>
            <Input
              name="energyConsumption"
              value={formData.energyConsumption}
              onChange={handleInputChange}
              placeholder="Enter tower energy consumption per day"
              type="number"
              step="any"
            />
            {errors.energyConsumption && <span style={{ color: 'red' }}>{errors.energyConsumption}</span>}
          </Form.Field>
          <Button type="submit" color="yellow" fluid>
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

SolarDataInputPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SolarDataInputPage;
