import React from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';
import user from "../assets/user1.jpg";
import password from "../assets/password.png";

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', paddingBottom: '0px' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <view className="text-center mb-6">
          <h1 className="text-center" style={{ marginBottom: '40%' }}>LOGIN</h1>
          </view>
          <Form>
          <Form.Group controlId="formUsername" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Username"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={user} alt="email icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ paddingRight: '40px' }}
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={password} alt="password icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
              <div className="mt-2">
                <a href="#">Forgot password?</a>
              </div>
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
      >
        LOGIN
      </Button>
    </Container>
  );
}

export default Login;
