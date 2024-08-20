import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../components/HeaderComponent';

function StudentTables() {
  const students = [
    { id: 1, name: 'Mounika' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Arpita' },
    { id: 4, name: 'Yash' },
    { id: 5, name: 'Shruti' },
    { id: 6, name: 'Shailesh' },
    { id: 7, name: 'Archana' },
  ];

  return (
    <>
      <HeaderComponent page="Student Request" title="Paid Student List" />
      <div style={{ width: '95%', margin: '0 auto', marginTop: '10%', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ 
          backgroundColor: '#DBDC31', 
          padding: '10px 20px',
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          fontWeight: 'bold',
        }}>
          <div>S. No</div>
          <div style={{ flexGrow: 1, textAlign: 'center' }}>Student Name</div>
          <div>Details</div>
        </div>
        
        {students.map((student) => (
          <div 
            key={student.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px 10px',
              borderBottom: '1px solid #ddd'
            }}
          >
            <div>{student.id}</div>
            <div style={{ flexGrow: 1, textAlign: 'center' }}>{student.name}</div>
            <Button 
              variant="primary" 
              style={{ 
                marginLeft: 'auto', 
                backgroundColor: '#DBDC31', 
                height: '30px', 
                width: '100px', 
                color: 'black',
                fontSize: '10px'
              }}
            >
              VIEW
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentTables;
