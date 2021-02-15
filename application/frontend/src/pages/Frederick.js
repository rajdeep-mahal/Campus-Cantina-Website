import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/frederick.css';
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Frederick = () => {
  return (
    <body className="bg">
    
      <header id="header">
      <Navbar bg="dark" variant="dark" stick="top">
        <Navbar.Brand id="logo">Frederick</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#aboutMe">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
     

    <section id="hero">
    <div className="hero-container">
        <h1>frederick.portfolio<span class="blinking"> .</span></h1>
        <h2>Software Engineer</h2>
        <a href="#aboutMe" class="btn-get-started">About Me</a>
    </div>
  </section>

  <Container>
    <div id="wrapper">
      <div className="w-100 h-100 p-3">
        <h2>Testing</h2>
      </div>
    </div>
  </Container>
  
  </body>
  );
};

export default Frederick;

/* <Card className="bg-dark text-white" style={{width: '50%' }} >
<Card.Img variant="top" rounded/>
<Card.Body>
  <Card.Text>
  I am a computer science student in my senior year at SFSU. I
      enjoy creating mobile apps and learning new technologies. In my free 
      time I like to program, rock climb, read, and listen to music.
  </Card.Text>
</Card.Body>
</Card>  */