import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";


const Nabar = () => {
 

  return (
    <>
    <section id='home'>    <header id="header" className="header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#Service" >Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
      </section>

    </>
  );
};

export default Nabar;
