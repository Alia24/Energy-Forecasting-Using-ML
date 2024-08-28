import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert
} from '@coreui/react';

import '../../../scss/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the email to the backend
    const response = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('A password reset link has been sent to your email.');
    } else {
      setMessage(data.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="forgot-password-wrapper">
      <CContainer>
        <CRow className="justify-content-center align-items-center min-vh-100">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4 forgot-password-card">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h2 className="forgot-password-heading">Forgot Password</h2>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>Email Address</CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CButton type="submit" color="primary" className="mt-3">
                      Send Reset Link
                    </CButton>
                    {message && <CAlert color="info" className="mt-3">{message}</CAlert>}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPassword;
