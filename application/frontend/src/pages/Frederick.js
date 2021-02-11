import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/rinay.css';

const Frederick = () => {
  return (
      <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Frederick</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#About Me">About Me</Nav.Link>
          <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
    
  );
};

export default Frederick;
