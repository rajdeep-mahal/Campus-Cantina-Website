import React from 'react';
import '../assets/css/german.css';

//Images
import portrait from '../assets/img/german/portrait.jpg';
import Github from '../assets/img/rinay/github.png';
import Linkedin from '../assets/img/rinay/linkedin.png';
import Email from '../assets/img/rinay/email2.png';

const German = () => {
  return ( 
    <div>
      <section id="Gheader" style={{ textAlign: 'center' }}>
        
        <div className ="Headertitle">
        <img
              class=" img-fluid rounded-circle"
              src={portrait}
              width="150"
              alt="portrait"
            />
          <h1>German Perez</h1> 
          <section id="GLinks"> 
          <img
              class=" img-fluid "
              src={Github}
              width="15"
              alt="Github"
            />
            <a href = "https://github.com/germanp123"> Github </a> 
            <img
              class=" img-fluid "
              src={Linkedin}
              width="15"
              alt="Linkedin"
            />
            <a href = "https://www.linkedin.com/in/germanperezm/"> LinkedIn </a>  <br/>
            <img
              class=" img-fluid "
              src={Email}
              width="15"
              alt="Email"
            />
            <a href = "mailto:gperez8@mail.sfsu.edu"> Email </a> 
          </section>
        </div>
        <div className =""></div>
      </section>

      <section id="Gcontent" style={{ textAlign: 'left' }}>
        <div className ="Contents"> 
        
        <div className ="titles"> <h3> About Me</h3> </div>
        <p> Hi there. I am a Computer Science major at SFSU who's interested in the Data Analytics field. 
          When I'm not behind a computer, I enjoy long distance running or finding the next foodie hotspot 
          in San Francisco. </p>

        <div className ="titles"> <h3> <br/> Education </h3> </div>
        <h5> San Francisco State University - Exp May 2021 </h5>
        <p> Bachelor of Science - Computer Science <br/> Mathematics Minor</p>

        <div className ="titles"> <h3> <br/> Experience </h3> </div>
        <h5> Teacher Assistant (Computer Science) - Spring 2021</h5>
        <p>  Acted as TA for 2 courses/sections of 120 students. 
          <br/> Served as a point of contact for students 
          <br/> and provided knowledge and insight for course concepts via zoom. </p>
            
        <h5> Tutor (Mathematics) - 2018 through 2021</h5>
        <p> Assisted first and second year college students in probability, statistics, and calculus. </p>

        </div>
      </section>
    </div>
  );
};

export default German;