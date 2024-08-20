import React from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';
import user from "../assets/user1.jpg";
import password from "../assets/password.png";
import classIcon from "../assets/class.png";
import department from "../assets/department.png";
import telephone from "../assets/telephone.png";
import email from "../assets/mail.png";
import View from "../components/View"

function Register() {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', paddingBottom: '0px' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <View className="text-center mb-4">
            <h1>REGISTER</h1>
          </View>
          <Form>
            {/* Name Field */}
            <Form.Group controlId="formName" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={user} alt="Name icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="formEmail" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={email} alt="Email icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Contact Number Field */}
            <Form.Group controlId="formContactNumber" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Contact Number"
                  aria-label="Contact Number"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={telephone} alt="Contact Number icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Class Field */}
            <Form.Group controlId="formClass" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Class"
                  aria-label="Class"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={classIcon} alt="Class icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Department Field */}
            <Form.Group controlId="formDepartment" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Department"
                  aria-label="Department"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={department} alt="Department icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ paddingRight: '40px' }}
                  aria-label="Password"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={password} alt="Password icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{ paddingRight: '40px' }}
                  aria-label="Confirm Password"
                />
                <InputGroup.Text style={{ background: 'transparent', border: 'none' }}>
                  <img src={password} alt="Confirm Password icon" style={{ width: '20px', height: '20px' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <View className="text-center mt-5">
              <p>Already Have An Account? <a href="/login">Login</a></p>
            </View>
          </Form>
        </Col>
      </Row>
      <Button
        variant="primary"
        className="mt-4"
        style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', width: '90%' }}
      >
        REGISTER
      </Button>
    </Container>
  );
}

export default Register;
