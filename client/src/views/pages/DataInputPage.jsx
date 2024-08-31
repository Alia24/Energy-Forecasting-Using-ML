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
    // Here you would typically save the data to your state management solution or backend
    // For now, we'll just navigate to the next page
    navigate('/equipment-needs-calculation')
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Data Input</strong>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="latitude">Latitude</CFormLabel>
              <CFormInput
                type="number"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                invalid={!!errors.latitude}
              />
              {errors.latitude && <div className="invalid-feedback">{errors.latitude}</div>}
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="longitude">Longitude</CFormLabel>
              <CFormInput
                type="number"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                invalid={!!errors.longitude}
              />
              {errors.longitude && <div className="invalid-feedback">{errors.longitude}</div>}
            </CCol>
          </CRow>
          <CRow className="mt-3">
            <CCol md={6}>
              <CFormLabel htmlFor="energyConsumption">Energy Consumption (kWh)</CFormLabel>
              <CFormInput
                type="number"
                id="energyConsumption"
                name="energyConsumption"
                value={formData.energyConsumption}
                onChange={handleInputChange}
                invalid={!!errors.energyConsumption}
              />
              {errors.energyConsumption && <div className="invalid-feedback">{errors.energyConsumption}</div>}
            </CCol>
          </CRow>
          <CRow className="mt-3">
            <CCol md={6}>
              <CFormLabel htmlFor="generatorFuelConsumption">Generator Fuel Consumption Rate</CFormLabel>
              <CFormInput
                type="number"
                id="generatorFuelConsumption"
                name="generatorFuelConsumption"
                value={formData.generatorFuelConsumption}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="generatorMaintenanceCost">Generator Maintenance Cost</CFormLabel>
              <CFormInput
                type="number"
                id="generatorMaintenanceCost"
                name="generatorMaintenanceCost"
                value={formData.generatorMaintenanceCost}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow className="mt-3">
            <CCol md={6}>
              <CFormLabel htmlFor="batteryType">Current Battery Type</CFormLabel>
              <CFormInput
                type="text"
                id="batteryType"
                name="batteryType"
                value={formData.batteryType}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="batteryLifespan">Battery Lifespan (years)</CFormLabel>
              <CFormInput
                type="number"
                id="batteryLifespan"
                name="batteryLifespan"
                value={formData.batteryLifespan}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CButton color="primary" type="submit" className="mt-3">
            Submit
          </CButton>
        </CForm>

        {showSummary && (
          <CAlert color="info" className="mt-3">
            <h4>Data Summary</h4>
            <p>Location: {formData.latitude}, {formData.longitude}</p>
            <p>Energy Consumption: {formData.energyConsumption} kWh</p>
            <p>Generator Fuel Consumption: {formData.generatorFuelConsumption}</p>
            <p>Generator Maintenance Cost: {formData.generatorMaintenanceCost}</p>
            <p>Battery Type: {formData.batteryType}</p>
            <p>Battery Lifespan: {formData.batteryLifespan} years</p>
            <CButton color="success" onClick={handleConfirm}>
              Confirm and Continue
            </CButton>
          </CAlert>
        )}
      </CCardBody>
    </CCard>
  )
}

export default DataInputPage