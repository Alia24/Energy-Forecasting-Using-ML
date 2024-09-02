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
import { Sun, MapPin } from 'lucide-react'

const SimplifiedDataInputPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    energyConsumption: '',
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
    navigate('/equipment-needs-calculation', { state: { inputData: formData } });
  }

  return (
    <CCard className="mt-4 border-0 shadow mx-auto" style={{ maxWidth: '700px' }}>
      <CCardHeader className="bg-warning text-dark">
        <Sun className="me-2" />
        <strong>Solar Energy System Input</strong>
      </CCardHeader>
      <CCardBody className="bg-light">
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CCol xs={12}>
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
          </CRow>
          <CRow className="mb-3">
            <CCol xs={12}>
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
          <CRow className="mb-3">
            <CCol xs={12}>
              <div className="d-flex align-items-center mb-2">
                <Sun className="me-2 text-warning" />
                <CFormLabel htmlFor="energyConsumption" className="mb-0">Tower Energy Consumption Per Day (kWh)</CFormLabel>
              </div>
              <CFormInput
                type="number"
                id="energyConsumption"
                name="energyConsumption"
                value={formData.energyConsumption}
                onChange={handleInputChange}
                invalid={!!errors.energyConsumption}
                placeholder="Enter tower energy consumption per day"
              />
              {errors.energyConsumption && <div className="invalid-feedback">{errors.energyConsumption}</div>}
            </CCol>
          </CRow>
          <CButton color="warning" type="submit" className="text-dark w-100">
            <Sun className="me-2" />
            Calculate Equipment Needs
          </CButton>
        </CForm>

        {showSummary && (
          <CAlert color="success" className="mt-4">
            <h4 className="alert-heading">Solar System Summary</h4>
            <p><strong>Location:</strong> {formData.latitude}, {formData.longitude}</p>
            <p><strong>Tower Energy Consumption Per Day:</strong> {formData.energyConsumption} kWh</p>
            <CButton color="success" onClick={handleConfirm} className="w-100">
              Confirm and Design Solar System
            </CButton>
          </CAlert>
        )}
      </CCardBody>
    </CCard>
  )
}

export default SimplifiedDataInputPage