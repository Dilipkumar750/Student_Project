import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View"; 
import success from "../../assets/SUCCESS.png";
import { Image } from '../../components/Image';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function RegistrationSuccess() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderComponent page="Request Form" title="Fill Your Form" />
      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px", 
        padding: '0.4rem',
        margin: "1rem",
        position: 'relative',
        minHeight: '200px'
      }}>
        <View style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: '1rem',
          minHeight: '200px'
        }}>
          <Image src={success} alt="Success" style={{ width: "50px", margin: "0 auto" }} />
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#28a745', marginTop: '1rem' }}>
            Thank you for submitting the form.<br />
            We will let you know the status in approximately 2 days.
          </p>
        </View>
        
      </View>
      <Button
          variant="primary"
          className="mb-0"
          style={{ 
            backgroundColor: '#DBDC31', 
            borderColor: '#DBDC31', 
            position: 'absolute', 
            bottom: '20px', 
            left: '50%', 
            transform: 'translateX(-50%)',  // Center the button horizontally.
            width: '90%' 
          }}
          onClick={()=>{navigate('/MentorHome')}}
        >
          OK
        </Button>
    </>
  )
}

export default RegistrationSuccess;
