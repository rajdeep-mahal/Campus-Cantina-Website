import React from "react";
import "../assets/css/about_individual.css";
import ProfilePic from "../assets/img/about/henzon/henzon.jpg";
import Java from "../assets/img/about/henzon/java-icon.png"
import HTML from "../assets/img/about/henzon/html-icon.png"
import CSS from "../assets/img/about/henzon/css-icon.png"
import C from "../assets/img/about/henzon/c-icon.png"
import Swift from "../assets/img/about/henzon/swift-icon.png"
import Cpp from "../assets//img/about/henzon/cpp-icon.png"

import Linkedin from "../assets/img/about/henzon/linkedin-icon.png"
import Github from "../assets//img/about/henzon/github-icon.png"
import Mail from "../assets/img/about/henzon/mail.png"


import RainbowReef from "../assets/img/about/henzon/rainbowreef_game.png"
import Calculator from "../assets/img/about/henzon/calculator.png"
import Hercules from "../assets/img/about/henzon/hercules-app.png"





const Henzon = () => {
  return (
    <div className="about-page">
      <div className="jumbotron jumbotron-fluid about-header">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="mx-5">
            <img
              className="rounded-circle about-img"
              src={ProfilePic}
              alt="profilepicture"
            />
          </div>
          <div className="about-me-text pt-5 text-white">
            <h1 className="text-warning">About Me</h1>
            <h4>Henzon Zambrano</h4>
            <p>
              Undergraduate Student <br /> San Francisco State University
            </p>
          </div>
        </div>
      </div>

      <div className="about-body container-fluid">
        <div className="about-desc card">
          <div
            className="card-header"
            style={{ backgroundColor: "rgb(172, 155, 223)" }}
          >
            <a class = "hz-contacts" href = "https://www.linkedin.com/in/henzon-zambrano-06b116105/"><img src = {Linkedin} width = "25" alt = ""></img></a>
            <a class = "hz-contacts" href = "https://github.com/henzonz"><img src = {Github} width = "25" alt = ""></img></a>
            <a class = "hz-contacts" href = "mailto:henzon.zno26@gmail.com"><img src = {Mail} width = "25" alt = ""></img></a>

          </div>
          <div className="card-body bg-light">
            <p>
              <i>
                Hello! I'm Henzon and I'm an undergraduate student pursuing a B.S in Computer Engineering at SFSU. 
                <br />
                I'm from the Philippines and moved to the U.S in 2007. I currently live in the beautiful city of San Francisco, California.
                <br />
                During my free time, I enjoy working out, watching tv shows/movies, photography and playing video games!
                <br/>
                I'm interested in both frontend and backend development. I mainly enjoy frontend development, but I'm also eager to learn backend development to experience both sides of software development and be more flexible.
              </i>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center pt-4">Skillset</h2>
          <div className="container d-flex flex-wrap pt-2">
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">HTML</h4>
              <img src={HTML} width="74" height="74" alt="" />
            </div>

            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">CSS</h4>
              <img src={CSS} width="74" height="74" alt="" />
            </div>

            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Java</h4>
              <img src={Java} width="74" height="74" alt="" />
            </div>

            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">C</h4>
              <img src={C} width="74" height="74" alt="" />
            </div>

            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Swift</h4>
              <img src={Swift} width="74" height="74" alt="" />
            </div>

            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">C++</h4>
              <img src={Cpp} width="74" height="74" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center pt-4">Recent Projects</h2>
          <div className="d-flex justify-content-around row text-center flex-wrap mt-3">
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
               <a className = "hz-project-links" href = "https://github.com/henzonz/Super-Rainbow-Reef-Game"> <strong>Super Rainbow Reef Game</strong> </a>
              </h4>

              <blockquote className="card-body bg-light font-italic">
                A simple 2D game created using Java to practice object oriented programming.
              </blockquote><br/>
              <img src = {RainbowReef} alt = ""/>
            </div>

            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
               <a className = "hz-project-links" href = "https://github.com/henzonz/Calculator-GUI-asmt-"> <strong>Calculator</strong> </a>
              </h4>

              <blockquote className="card-body bg-light font-italic">
              A simple calculator GUI that properly evaluates mathematical expressions by following the correct order of operations.              </blockquote><br/>
              <img src = {Calculator} alt = ""/>
            </div>

            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
               <a className = "hz-project-links text-decoration-none" href = "https://sites.google.com/view/fitapp-repcounter/design?authuser=0"> <strong>Hercules App</strong> </a>
              </h4>

              <blockquote className="card-body bg-light font-italic">
              A simple fitness app rep counter that utilizes the three iPhone sensors: proximity sensor, gyroscope and touch screen. The app is created using the Swift language that allow users to workout without having to count repetitions of the mentioned workouts.              </blockquote><br/>
              <img src = {Hercules} alt = ""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Henzon;
