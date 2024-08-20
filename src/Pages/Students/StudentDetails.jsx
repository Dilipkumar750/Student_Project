import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../components/View"; 

function StudentDetails() {
  const [email, setEmail] = useState('');
  const [idNo, setIdNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nID No: ${idNo}`);
  };

  return (
    <>
      <HeaderComponent page="Request Form" title="Fill Your Form" />
      <Container className="mt-3">
        <h6 className="mb-3">Student Detail:</h6>
        
        <Card className="mb-3 p-3 shadow-m">
          <Card.Body>
            <p><strong>Name:</strong> Mounika Lakshmi</p>
            <p><strong>Email:</strong> mounika@gmail.com</p>
            <p><strong>Contact No:</strong> 8378926890</p>
            <p><strong>Class:</strong> 2nd std</p>
          </Card.Body>
        </Card>

        <Card className="p-3 shadow-sm">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Enter Student Email</Form.Label>
                <Form.Control 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formIdNo">
                <Form.Label>Enter Id No:</Form.Label>
                <Form.Control 
                  type="text" 
                  value={idNo}
                  onChange={(e) => setIdNo(e.target.value)}
                />
              </Form.Group>
              <View className="text-center mt-3">
                <Button 
                  variant="primary" 
                  type="submit"
                  style={{ backgroundColor: '#DBDC31', borderColor: '#DBDC31', width: '50%' }}
                >
                  SEND
                </Button>
              </View>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default StudentDetails;
