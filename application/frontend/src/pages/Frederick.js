import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/frederick.css';
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'


//import image here

const Frederick = () => {
  return (
    <div>
      
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

<section id="work">
  <Container fluid>
        <CardDeck>
          <Card bg="dark" text="white">
            <Card.Header as="h3">Work Experience</Card.Header>
            <Card.Body>
              <Card.Text>
                <h5>SOFTWARE ENGINEERING INTERN, ROOSTOO LABS LIMITED</h5>
                <ul>
                  <li>Worked as a software engineering intern on a mobile app that focused on mock cryptocurrency trading</li>
                  <li>Worked on the existing app that uses the Flutter framework</li>
                  <li>Helped to design and implement various new features for the app</li>
                  <li>Utilized Flutter, API’s, MVVM design, Android, and IOS</li>
                </ul>
                <h5>INTERN, GOLDEN GATE ELECTRIC VEHICLE ASSOCIATION</h5>
                <ul>
                  <li>Collected information on EV parking by utilizing GIS and open data</li>
                  <li>Implemented a Java front end with SQL database to collect and sort data</li>
                  <li>Utilized Excel and created software to present information to team leaders</li>
                  <li>Leveraged knowledge in Java, SQL, and Excel</li>
                </ul>
             </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <Card.Header as="h3">Skils</Card.Header>
            <Card.Body>
              <Card.Text>
              <h5>LANGUAGES/FRAMEWORKS</h5>
                <ul>
                  <li>Flutter and Dart</li>
                  <li>Web stack: React, Javascript, Html, Css</li>
                  <li>Languages: C++, Java, Ruby, C, Python</li>
                </ul>
                <h5>Technologies</h5>
                <ul>
                  <li>IDE's: VS Code, Intellij, Webstorm, Pycharm, Android Studio</li>
                  <li>Google Firebase, AWS</li>
                  <li>Design Architecutre: BLoC, Redux, MVC, MVVM</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        
  </Container>
  </section>
  
  </body>
  
  <footer>
    
  </footer>
  </div>
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