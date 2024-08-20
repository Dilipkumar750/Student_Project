import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import View from "../components/View"; 
import success from "../assets/SUCCESS.png";
import { Image } from '../components/Image';
import Button from 'react-bootstrap/Button';

function MentorSuccess() {
  return (
    <>
      <HeaderComponent page="Add Mentor" title="Mentor Request" />
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
          Mentor added successfully<br/>Please check mentor record for confirmation
          </p>
        </View>
      </View>
      <Button
        variant="primary"
        className="mb-0"
        href='/Mentorrecords'
        style={{ 
          backgroundColor: '#DBDC31', 
          borderColor: '#DBDC31', 
          position: 'absolute', 
          bottom: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)',  // Center the button horizontally.
          width: '90%' 
        }}
      >
        OK
      </Button>
    </>
  );
}

export default MentorSuccess;
