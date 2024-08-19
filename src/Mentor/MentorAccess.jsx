import React from 'react'
import View from "../components/View";
import { Image } from "../components/Image";
import HeaderComponent from "../components/HeaderComponent";
import user from '../assets/user.jpg'
import { Button } from 'react-bootstrap';


function MentorAccess() {
  return (
    <>
      <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
      <View style={{ padding: '1rem' }}>
        <h3>Already Registered Mentors: </h3>
        <View style={{
          border: "1px solid rgba(0, 0, 0, 0.16)",
          boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",display:'grid',gridTemplateColumns:'40% 60%',columnGap:'1rem',padding:'1rem'
        }}>
          <View>
            <Image src={user} style={{width:'70%',borderRadius:'50%'}}/>
          </View>
          <View>
            <p style={{margin:0,fontSize:'12px',}}>Name : john</p>
            <p style={{margin:0,fontSize:'12px'}}>Email: john12@gmail.com</p>
            <p style={{margin:0,fontSize:'12px'}}>Phone No: 34578279799</p>
            <p style={{margin:0,fontSize:'12px'}}>Qualification: MSC Maths</p>
            <p style={{margin:0,fontSize:'12px'}}>Class: 1st to 5th</p>
            <p style={{margin:0,fontSize:'12px'}}>Fees: 500</p>
          </View>
            <Button style={{padding:'5px', width:'80%',fontSize:'12px' }}>Register</Button>
            <Button style={{padding:'0', width:'60%',fontSize:'10px' }}>Connect to Whatsapp</Button>
        </View>
      </View>
      <View style={{ padding: '1rem' }}>
        <h3>Available Mentors:  </h3>
        <View style={{
          border: "1px solid rgba(0, 0, 0, 0.16)",
          boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",display:'grid',gridTemplateColumns:'40% 60%',columnGap:'1rem',padding:'1rem'
        }}>
          <View>
            <Image src={user} style={{width:'70%',borderRadius:'50%'}}/>
          </View>
          <View>
            <p style={{margin:0,fontSize:'12px',}}>Name : john</p>
            <p style={{margin:0,fontSize:'12px'}}>Email: john12@gmail.com</p>
            <p style={{margin:0,fontSize:'12px'}}>Phone No: 34578279799</p>
            <p style={{margin:0,fontSize:'12px'}}>Qualification: MSC Maths</p>
            <p style={{margin:0,fontSize:'12px'}}>Class: 1st to 5th</p>
            <p style={{margin:0,fontSize:'12px'}}>Fees: 500</p>
          </View>
            <Button style={{padding:'5px', width:'80%',fontSize:'12px' }}>Register</Button>
            <Button style={{padding:'0', width:'60%',fontSize:'10px' }}>Connect to Whatsapp</Button>
        </View>
      </View>
    </>
  )
}

export default MentorAccess
