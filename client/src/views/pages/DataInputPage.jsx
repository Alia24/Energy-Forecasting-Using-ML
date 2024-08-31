import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CAlert,
} from '@coreui/react'
import { Sun, MapPin, Battery, Droplet, Settings } from 'lucide-react' // Import Settings icon

const DataInputPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    energyConsumption: '',
    generatorFuelConsumption: '',
    generatorMaintenanceCost: '',
    batteryType: '',
    batteryLifespan: '',
  })
  const [showSummary, setShowSummary] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    let tempErrors = {}
    if (!formData.latitude) tempErrors.latitude = 'Latitude is required'
    if (!formData.longitude) tempErrors.longitude = 'Longitude is required'
    if (!formData.energyConsumption) tempErrors.energyConsumption = 'Energy consumption is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setShowSummary(true)
    }
  }

  const handleConfirm = () => {
    navigate('/equipment-needs-calculation')
  }

  return (
    <CCard className="mb-4 border-0 shadow">
      <CCardHeader className="bg-warning text-dark">
        <Sun className="me-2" />
        <strong>Solar Energy System Input</strong>
      </CCardHeader>
      <CCardBody className="bg-light">
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-4">
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <MapPin className="me-2 text-primary" />
                <CFormLabel htmlFor="latitude" className="mb-0">Latitude</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                invalid={!!errors.latitude}
                placeholder="Enter latitude"
              />
              {errors.latitude && <div className="invalid-feedback">{errors.latitude}</div>}
            </CCol>
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <MapPin className="me-2 text-primary" />
                <CFormLabel htmlFor="longitude" className="mb-0">Longitude</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                invalid={!!errors.longitude}
                placeholder="Enter longitude"
              />
              {errors.longitude && <div className="invalid-feedback">{errors.longitude}</div>}
            </CCol>
          </CRow>
          <CRow className="mb-4">
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <Sun className="me-2 text-warning" />
                <CFormLabel htmlFor="energyConsumption" className="mb-0">Energy Consumption (kWh)</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="energyConsumption"
                name="energyConsumption"
                value={formData.energyConsumption}
                onChange={handleInputChange}
                invalid={!!errors.energyConsumption}
                placeholder="Enter energy consumption"
              />
              {errors.energyConsumption && <div className="invalid-feedback">{errors.energyConsumption}</div>}
            </CCol>
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <Droplet className="me-2 text-info" />
                <CFormLabel htmlFor="generatorFuelConsumption" className="mb-0">Generator Fuel Consumption Rate</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="generatorFuelConsumption"
                name="generatorFuelConsumption"
                value={formData.generatorFuelConsumption}
                onChange={handleInputChange}
                placeholder="Enter fuel consumption rate"
              />
            </CCol>
          </CRow>
          <CRow className="mb-4">
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <Settings className="me-2 text-secondary" />
                <CFormLabel htmlFor="generatorMaintenanceCost" className="mb-0">Generator Maintenance Cost</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="generatorMaintenanceCost"
                name="generatorMaintenanceCost"
                value={formData.generatorMaintenanceCost}
                onChange={handleInputChange}
                placeholder="Enter maintenance cost"
              />
            </CCol>
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <Battery className="me-2 text-success" />
                <CFormLabel htmlFor="batteryType" className="mb-0">Current Battery Type</CFormLabel>
              </div>
              <CFormInput
                type="text"
                id="batteryType"
                name="batteryType"
                value={formData.batteryType}
                onChange={handleInputChange}
                placeholder="Enter battery type"
              />
            </CCol>
          </CRow>
          <CRow className="mb-4">
            <CCol md={6}>
              <div className="d-flex align-items-center mb-2">
                <Battery className="me-2 text-success" />
                <CFormLabel htmlFor="batteryLifespan" className="mb-0">Battery Lifespan (years)</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="batteryLifespan"
                name="batteryLifespan"
                value={formData.batteryLifespan}
                onChange={handleInputChange}
                placeholder="Enter battery lifespan"
              />
            </CCol>
          </CRow>
          <CButton color="warning" type="submit" className="text-dark">
            <Sun className="me-2" />
            Calculate Solar Needs
          </CButton>
        </CForm>

        {showSummary && (
          <CAlert color="success" className="mt-4">
            <h4 className="alert-heading">Solar System Summary</h4>
            <p><strong>Location:</strong> {formData.latitude}, {formData.longitude}</p>
            <p><strong>Energy Consumption:</strong> {formData.energyConsumption} kWh</p>
            <p><strong>Generator Fuel Consumption:</strong> {formData.generatorFuelConsumption}</p>
            <p><strong>Generator Maintenance Cost:</strong> {formData.generatorMaintenanceCost}</p>
            <p><strong>Battery Type:</strong> {formData.batteryType}</p>
            <p><strong>Battery Lifespan:</strong> {formData.batteryLifespan} years</p>
            <CButton color="success" onClick={handleConfirm}>
              Confirm and Design Solar System
            </CButton>
          </CAlert>
        )}
      </CCardBody>
    </CCard>
  )
}

export default DataInputPage
