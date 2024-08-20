import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';

function GrantTypes() {
  return (
    <>
      <HeaderComponent page="More Information" title="Grant" />

      <Container>
        <h6 className="mt-4">Types Of Grants:</h6>
        <Row>
          {grantData.map((grant, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card className="h-100 position-relative">
                <Card.Body className="d-flex flex-column">
                  <p>{grant.name}</p>
                  <Button 
                    
                    className="mt-auto"
                    style={{ 
                      position: 'absolute', 
                      right: '4%', 
                      bottom: '5%',
                      height: '34%',
                      width: '20%',
                      fontSize: '50%',
                      color: 'black',
                      backgroundColor: '#DBDC31'
                    }}
                  >
                    VIEW
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

const grantData = [
  { name: '1. Government Grants' },
  { name: '2. NGO Grants' },
  { name: '3. Corporate Social Responsibility (CSR) Grants' },
  { name: '4. Foundation Grants' }
];

export default GrantTypes;
