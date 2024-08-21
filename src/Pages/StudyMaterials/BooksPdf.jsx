import React, { useEffect, useState } from 'react';
import addclass from "../../assets/ADDCLASS.png";
import openbook from "../../assets/openBook.png";
import HeaderComponent from '../../components/HeaderComponent';
import View from '../../components/View';
import SmallBox from '../../components/SmallBox';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { HOST } from '../../App';
import axios from 'axios';


function MyVerticallyCenteredModal(props) {
  const [selectedFile, setSelectedFile] = useState();



  const handleAddClick = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    t(`${HOST}/upload/document`, formData)
    if (selectedFile) {
      console.log('Selected file:', formData);
    }
    props.onHide(); // Close the modal
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Uploads
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" name='file' onChange={(e) => { console.log(e.target.files[0]); setSelectedFile(e.target.files[0]) }} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddClick} style={{ backgroundColor: '#DBDC31' }}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function BooksPdf() {
  const [modalShow, setModalShow] = React.useState(false);
  const [data1, setData1] = useState([]);
  useEffect(()=>{
    const data = axios.get(`${HOST}/download/document`).then((res) => { console.log(res.data); setData1(res.data) })
  },[])
 
  const downloadFile=(id)=>{
    axios.get(`${HOST}/download/document/${id}`,{
      responseType: 'blob', // Specify the response type as 'blob' for binary data
    }).then((response) => {
      // Create a URL for the blob response
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
  
      // Set the download attribute with the filename
      link.setAttribute('download', response.headers['content-disposition'].split('filename=')[1].replace(/"/g, ''));
  
      // Trigger the download by programmatically clicking the link
      document.body.appendChild(link);
      link.click();
  
      // Cleanup
      link.parentNode.removeChild(link);
    })
    .catch((error) => {
      console.error('Error downloading file:', error);
    });
  }
  return (
    <>
      <HeaderComponent page="Add study Materials" title="Books" />
      <div>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            padding: "0 0.6rem",
            marginTop: '100px', // Corrected property
            alignItems: 'center', // Corrected property
            justifyContent: 'center', // Corrected property
          }}
        >
          <View style={{ height: '150px' }} onClick={() => setModalShow(true)}>
            <SmallBox image={addclass} title="add books " />
          </View>
          {Array.isArray(data1) && data1.length > 0 && data1
            .filter((value) => value.mimetype === 'application/pdf') // Filter the data
            .map((value, key) => (
              <View style={{ height: '150px' }} key={key}>
                <SmallBox image={openbook} title={value.filename} onPress={()=>{const id =value._id ;downloadFile(id)}} />
              </View>
            ))}
          <View style={{ height: '150px' }}>
            <SmallBox image={openbook} title="Science.pdf" />
          </View>
          <View style={{ height: '150px' }}>
            <SmallBox image={openbook} title="English.pdf" />
          </View>
        </View>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BooksPdf;
