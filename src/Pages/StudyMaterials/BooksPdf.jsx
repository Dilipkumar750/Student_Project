import React,{useState} from 'react';
import addclass from "../../assets/ADDCLASS.png";
import openbook from "../../assets/openBook.png";
import HeaderComponent from '../../components/HeaderComponent';
import View from '../../components/View';
import SmallBox from '../../components/SmallBox';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function MyVerticallyCenteredModal(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAddClick = () => {
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
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
          <Form.Control type="file" onChange={handleFileChange} />
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
          <View style={{ height: '150px' }}>
            <SmallBox image={openbook} title="Maths.pdf" />
          </View>
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
