import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ height: '80px' }}>
    <Navbar.Brand href="#home">Tech by Sandhya</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="ml-auto d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
