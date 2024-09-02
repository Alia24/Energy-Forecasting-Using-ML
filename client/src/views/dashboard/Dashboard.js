import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import MainChart from './MainChart'; // Make sure you have a chart component

const Dashboard = () => {
  return (
    <CCard className="mb-4 border-0 shadow">
      <CCardBody className="bg-light">
        <CRow>
          <CCol sm={12}>
            <h4 id="traffic" className="card-title mb-0 text-warning">
              Solar Energy Production
            </h4>
            <div className="small text-muted">January - July 2024</div>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol sm={12}>
            <div className="chart-container">
              <MainChart />
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
}

export default Dashboard;
