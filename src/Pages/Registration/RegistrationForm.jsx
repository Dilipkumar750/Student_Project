import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import { TextInput } from '../../components/TextInput';
import { Image } from '../../components/Image';
import View from "../../components/View"; 
import Registration from "../../assets/add-user.png";
import Button from 'react-bootstrap/Button'; // Correct import for React Bootstrap Button

function RegistrationForm() {
  return (
    <>
      <HeaderComponent page="Request Form" title="Fill Your Form" />
      <View style={{
        border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px", 
        padding: '0.4rem',
        margin: "1rem"
      }}>
        <h6 style={{ textAlign: 'center' }}>REGISTRATION FORM</h6>
        <View style={{ 
          display: "grid", 
          gridTemplateColumns: "40% 60%", 
          gap: '1rem', 
          padding: '0 1rem' 
        }}>
          <Image src={Registration} alt="Registration" style={{ gridColumn: "span 2", margin: "0 auto" }} />
          <p style={{ fontSize: '15px' }}>Name:</p>
          <TextInput type="text" />
          <p style={{ fontSize: '15px' }}>Email:</p>
          <TextInput type="text" />
          <p style={{ fontSize: '15px' }}>Qualification:</p>
          <TextInput type="text" />
          <p style={{ fontSize: '15px' }}>Contact No:</p>
          <TextInput type="text" />
          <p style={{ fontSize: '15px' }}>Class:</p>
          <TextInput type="text" />
          <p style={{ fontSize: '15px' }}>Fees:</p>
          <TextInput type="text" />
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button style={{ backgroundColor: '#DBDC31', color: '#000' }}>Submit</Button>
        </View>
      </View>
    </>
  )
}

export default RegistrationForm;
