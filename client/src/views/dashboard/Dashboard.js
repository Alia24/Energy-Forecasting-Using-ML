import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import MainChart from './MainChart'

const Dashboard = () => {
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={12}>
            <h4 id="traffic" className="card-title mb-0">
              Solar Energy Production
            </h4>
            <div className="small text-body-secondary">January - July 2024</div>
          </CCol>
        </CRow>
        <MainChart />
      </CCardBody>
    </CCard>
  )
}

export default Dashboard