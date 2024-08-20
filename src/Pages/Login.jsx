import React, { useState } from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';
import user from "../assets/user1.jpg";
import View from "../components/View";
import password from "../assets/password.png";
import { Image } from "../components/Image";
import axios from 'axios'
import { HOST } from '../App';

function Login() {
  const [getData, setGetData]= useState({});
  // const [getData1, setGetData1]= useState({});
  const postData=()=>{
    // const data = {getData,}
      axios.post(`${HOST}/user/login`,getData).then((res)=>(console.log(res.data)))
    // console.log(getData,);
  }
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', paddingBottom: '0px' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <View className="text-center mb-6">
            <h1 className="text-center" style={{ marginBottom: '40%' }}>LOGIN</h1>
          </View>
          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Username"
                  name='email'
                  onChange={(e)=>{
                    const name = e.target.name;
                    setGetData({
                      ...getData,
                      [name]:e.target.value
                    })
                  }}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={user} alt="email icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name='password'
                  style={{ paddingRight: '40px' }}
                  onChange={(e)=>{setGetData({...getData,[e.target.name]:e.target.value})}}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <Image src={password} alt="password icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
              <View className="mt-2">
                <a href="#">Forgot password?</a>
              </View>
            </Form.Group>



            <div className="text-center mt-5">
              <p>Don’t Have An Account? <a href="/register">Register</a></p>
            </div>
          </Form>
        </Col>
      </Row>
      <Button
        variant="primary"
        className=" mb-0"
        style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', position: 'absolute', bottom: 20, width: '90%' }}
        onClick={()=>postData()}      >
        LOGIN
      </Button>
    </Container>
  );
}

export default Login;
