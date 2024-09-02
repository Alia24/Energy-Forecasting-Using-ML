import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CAlert
} from '@coreui/react';
import { Sun, BatteryCharging, Battery } from 'lucide-react';  // Use available icons

const EquipmentNeedsCalculationPage = () => {
  // const location = useLocation();
  // const [equipmentData, setEquipmentData] = useState(null);
  // const [error, setError] = useState(null);
  // const userInput = location.state?.inputData;  // Changed from userInput to inputData

  // console.log(userInput);
  // // Fetching equipment needed data from server
  // const getEquipmentData = async () => {
  //   if (!userInput) {
  //     setError("No user input data available");
  //     return;
  //   }

  //   const url = `/api/calculate-equipment-needed?latitude=${userInput.latitude}&longitude=${userInput.longitude}&energyConsumption=${userInput.energyConsumption}`;

  //   try {
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Unexpected error occurred when contacting server.");
  //     }

  //     const data = await response.json();
  //     setEquipmentData(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // Equipment data requested on mount of component
  // useEffect(() => {
  //   getEquipmentData();
  // }, [userInput]);  // Added userInput to the dependency array

  // if (error) {
  //   return <CAlert color="danger">Error: {error}</CAlert>;
  // }

  // if (!equipmentData) {
  //   return <CAlert color="info">Loading...</CAlert>;
  // }

  // Use actual data from server response
  // const { solarPanels, lithiumBatteries, panelSize, batteryCapacity } = equipmentData;

  return (
    <CCard className="mt-4 border-0 shadow mx-auto" style={{ maxWidth: '700px' }}>
      <CCardHeader className="bg-warning text-dark">
        <Sun className="me-2" />
        <strong>Solar Equipment Needs Calculation</strong>
      </CCardHeader>
      <CCardBody className="bg-light">
        <CRow>
          <CCol>
            <h4>Required Equipment</h4>
            <CListGroup>
              <CListGroupItem>
                <Sun className="me-2" />  {/* Use a generic sun icon */}
                <strong>Number of Solar Panels Needed:</strong> {/*solarPanels*/} 1
              </CListGroupItem>
              <CListGroupItem>
                <BatteryCharging className="me-2" />
                <strong>Number of Lithium Batteries Needed:</strong> {/*lithiumBatteries*/} 1
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <h4>Detailed Breakdown</h4>
            <CListGroup>
              <CListGroupItem>
                <strong>Panel Size:</strong> {/*panelSize*/} W
              </CListGroupItem>
              <CListGroupItem>
                <strong>Battery Capacity:</strong> {/*batteryCapacity*/} 1kWh
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <h4>Total Capacity</h4>
            <CListGroup>
              <CListGroupItem>
                <strong>Total Solar Capacity:</strong> {/*solarPanels * panelSize*/} 1W
              </CListGroupItem>
              <CListGroupItem>
                <strong>Total Battery Storage:</strong> {/*lithiumBatteries * batteryCapacity*/} 1kWh
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default EquipmentNeedsCalculationPage;
