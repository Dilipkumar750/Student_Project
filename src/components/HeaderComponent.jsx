import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { HiChevronLeft } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import logo from '../assets/navLogo.png'

function HeaderComponent({page}) {
  return (
    <Navbar className="" style={{backgroundColor:'#DBDC31'}}>
      <Container>
        <Navbar.Brand href="#home">
          <HiChevronLeft />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            {page}
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <AiOutlineHome />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
