import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

const EquipmentNeedsCalculationPage = () => {
  // Hardcoded data for design purposes
  const solarPanels = 12;
  const lithiumBatteries = 4;
  const panelSize = 300; // Watts
  const batteryCapacity = 2.4; // kWh

  return (
    <CCard>
      <CCardHeader>Equipment Needs Calculation</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <h4>Required Equipment:</h4>
            <CListGroup>
              <CListGroupItem>
                <strong>Number of Solar Panels Needed:</strong> {solarPanels}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Number of Lithium Batteries Needed:</strong> {lithiumBatteries}
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <h4>Detailed Breakdown:</h4>
            <CListGroup>
              <CListGroupItem>
                <strong>Panel Size:</strong> {panelSize} W
              </CListGroupItem>
              <CListGroupItem>
                <strong>Battery Capacity:</strong> {batteryCapacity} kWh
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <h4>Total Capacity:</h4>
            <CListGroup>
              <CListGroupItem>
                <strong>Total Solar Capacity:</strong> {solarPanels * panelSize} W
              </CListGroupItem>
              <CListGroupItem>
                <strong>Total Battery Storage:</strong> {lithiumBatteries * batteryCapacity} kWh
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default EquipmentNeedsCalculationPage;