import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import List from '../../components/List'
import test from "../../assets/test.png";
import { Image } from '../../components/Image';
import View from '../../components/View';


function TestList() {
  return (
    <>
    <HeaderComponent page="Progress Chart" title="Check Progress"/>
    <View style={{padding:'1rem',display:'grid',gap:'1rem'}}>
        <p style={{ textAlign: 'center',}}>Kindly Take The Tests Given Below For Checking The Progress</p>
        <View>
            <h5>Test - 1</h5>
            <List>
            <Image src={test} alt="test" style={{width:'80%'}} />
            <span>Maths.form</span>
          </List>
        </View>
        <View>
            <h5>Test - 1</h5>
            <List>
            <Image src={test} alt="test" style={{width:'80%'}} />
            <span>Maths.form</span>
          </List>
        </View>
        <View>
            <h5>Test - 1</h5>
            <List>
            <Image src={test} alt="test" style={{width:'80%'}} />
            <span>Maths.form</span>
          </List>
        </View>
    </View>
    </>
  )
}

export default TestList