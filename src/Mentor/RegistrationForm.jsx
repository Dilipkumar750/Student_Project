import React from "react";
import View from "../components/View";
import { Image } from "../components/Image";
import HeaderComponent from "../components/HeaderComponent";
import user from "../assets/user.jpg";
import { Button } from "react-bootstrap";

function RegistrationForm() {
    return (
        <>
            <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
            <div style={{
                border: "1px solid rgba(0, 0, 0, 0.16)",
                boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px", padding: '0.4rem',margin:"1rem"
            }}>
                <h6 style={{ textAlign: 'center' }}>REGISTERATION FORM</h6>
                <div style={{ display: "grid", gridTemplateColumns: "40% 60%", gap: '1rem', padding: '0 1rem' }}>
                    <p style={{ fontSize: '10px' }}>Name</p>
                    <input type="text" />
                    <p style={{ fontSize: '10px' }}>Email</p>
                    <input type="text" />
                    <p style={{ fontSize: '10px' }}>Contanct No</p>
                    <input type="text" />
                    <p style={{ fontSize: '10px' }}>Qualification</p>
                    <input type="text" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}><Button style={{ backgroundColor: '#DBDC31' }}>PAY</Button></div>
            </div>
        </>
    );
}

export default RegistrationForm;
