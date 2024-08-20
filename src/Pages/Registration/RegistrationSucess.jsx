import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View"; 
import success from "../../assets/SUCCESS.png";
import { Image } from '../../components/Image';

function RegistrationSuccess() {
  return (
    <>
      <HeaderComponent page="Request Form" title="Fill Your Form" />
      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px", 
        padding: '0.4rem',
        margin: "1rem"
      }}>
        <h6 style={{ textAlign: 'center' }}>REGISTRATION SUCCESSFUL</h6>
        <View style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: '1rem',
          height: '300px'
        }}>
          <Image src={success} alt="Success" style={{ width: "150px", margin: "0 auto" }} />
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#28a745', marginTop: '1rem' }}>
            Thank you for submitting the form.<br />
            We will let you know the status in approximately 2 days.
          </p>
        </View>
      </View>
    </>
  )
}

export default RegistrationSuccess;
