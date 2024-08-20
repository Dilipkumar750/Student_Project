import React from 'react'
import HeaderComponent from "../components/HeaderComponent";
import { TextInput } from '../components/TextInput';
import { Button } from 'react-bootstrap';
import List from '../components/List';


function StudyMaterialsList() {
  return (
    <>
      <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
      <div style={{margin:'1rem',border:'1px solid black',padding:'1rem'}}>
        <p>Enter Id No.:</p>
        <input type="text" style={{display:'block',width:'100%',border:'1px solid black'}} />
        <br />
        <div style={{margin:'0 auto',width:'fit-content'}}><Button style={{backgroundColor:'#DBDC31',border:'0',padding:"4px 20px",color:'black'}}>Procced</Button></div>
      </div>
      <div style={{border:'1px solid black'}}>
        <div style={{borderBottom:'1px solid black'}}>STUDY MATERIAL</div>
        <div>
          <List>
            <span>sdfsddf</span>
            <span>Class-1st</span>
            <span>icon</span>
          </List>
        </div>
      </div>
    </>
  )
}

export default StudyMaterialsList
