import Profile from '../assets/img_henzon/portrait_pic.jpeg';
import Linkedin from '../assets/img_henzon/linkedin_ic.png';
import Github from '../assets/img_henzon/github_ic.png';
import Education from '../assets/img_henzon/education.png';
import Mail from '../assets/img_henzon/mail.png';
import '../assets/css/henzon.css';
import React from 'react';



const Henzon = () => {
  return (
    <div className='About_me'>
      <header>
        <img class = "profile_pic" src = {Profile} width = "150" alt = "profile_pic"/>
        
        <h1>Henzon Zambrano</h1>
        <ul>
        <li><img class = "linkedin" src = {Linkedin} width = "30" alt = "linkedin"/>
        <a href = "https://www.linkedin.com/in/henzon-zambrano-06b116105/">
          Linkedin
        </a></li>
        <li><img class = "github" src = {Github} width = "30" alt = "github"/>
        <a href = "https://github.com/henzonz">
          Github
        </a></li>
        <li><img class = "mail" src = {Mail} width = "30" alt = "mail"/>
        <a href = "mailto: zhenzon26@gmail.com">
          zhenzon8991@gmail.com
        </a></li>
        </ul>
      </header>

      <div className = "info">
      <h2>Projects</h2>
        <ul>
          <li><a href = "https://github.com/henzonz/Super-Rainbow-Reef-Game"> Super Rainbow Reef Game </a></li>
          <p>A simple 2-D game created using Java to practice object oriented programming.   </p>

          <li><a href = "https://github.com/henzonz/Calculator-GUI-asmt-"> Calculator </a></li>
          <p>A simple calculator GUI that properly evaluates mathematical expressions by following the correct order of operations.   </p>
        
        
          <li><a href = "https://sites.google.com/d/1fT0q9McLlsaqFR7TymBE8HUAwA1LUbFi/p/1jC9TGeGSuDAWNaaCqpRhbtXnWeY6OXJX/edit"> Fit App </a></li>
          <p> A simple fitness app that utilizes the three iPhone sensors: proximity sensor, gyroscope and touch screen. The app is created using the Swift language that allow users to workout without having to count repetitions of the mentioned workouts.    </p>
        </ul>

        
        
        <h2>Languages</h2>
        <ul>
          <h3><i>Preferred Languages</i></h3>
          <li> Java </li>
          <li> C </li>
          <li> HTML & CSS </li>
          <h3><i>Basics</i></h3>
          <li> Verilog </li>
          <li> Swift </li>
          <li> C++ </li>
          <li>Python</li>

        </ul>
        </div>
    </div>
  );
};

export default Henzon;