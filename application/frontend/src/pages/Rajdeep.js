import React from "react";
import "../assets/css/about_individual.css";
import ProfilePic from "../assets/img/about/rajdeep/rajdeep.jpg";
import HTMLLogo from "../assets/img/about/rajdeep/html.png";
import CSSLogo from "../assets/img/about/rajdeep/css.png";
import JSLogo from "../assets/img/about/rajdeep/javascript.png";
import ReactLogo from "../assets/img/about/rajdeep/react.png";
import NodeLogo from "../assets/img/about/rajdeep/node.png";
import BootstrapLogo from "../assets/img/about/rajdeep/BootstrapLogo.png";
import JavaLogo from "../assets/img/about/rajdeep/JavaLogo.png";
import CLogo from "../assets/img/about/rajdeep/CLogo.png";
import calc from "../assets/img/about/rajdeep/calc.png";
import gpa from "../assets/img/about/rajdeep/gpa.png";
import imgur from "../assets/img/about/rajdeep/imgur.png";
import portfolio from "../assets/img/about/rajdeep/portfolio.png";

const Rajdeep = () => {
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
            <h4>Rajdeep Singh</h4>
            <p>
              Graduate Student <br /> San Francisco State University
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
            <i className="fas fa-university mr-2" />
            <i className="fas fa-server mr-2" />
            <i className="fas fa-heart mr-2" />
            <i className="fas fa-music mr-2" />
          </div>
          <div className="card-body bg-light">
            <p>
              <i>
                My name is Rajdeep Singh, and I am from the Bay Area. I am a second
                year student of computer science at SFSU.
                <br />
                I have achieved many different goals in life. Some of my achievements are bigger than the
                others, which has given me greater satisfaction.
                <br />
                My specialties include quickly learning new skills, responsive design principles
                and problem solving.
                <br />
                I am still grabbing the other programming languages, principles and frameworks.
              </i>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center pt-4">Skillset</h2>
          <div className="container d-flex flex-wrap pt-2">
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">HTML</h4>
              <img src={HTMLLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">CSS</h4>
              <img src={CSSLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">JavaScript</h4>
              <img src={JSLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">React.js</h4>
              <img src={ReactLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Node.js</h4>
              <img src={NodeLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Bootstrap</h4>
              <img src={BootstrapLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Java</h4>
              <img src={JavaLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">C++</h4>
              <img src={CLogo} width="74" height="74" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center pt-4">Recent Projects</h2>
          <div className="d-flex justify-content-around row text-center flex-wrap mt-3">
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>Calculator</strong>
              </h4>

              { <img
                  className="card-img-bottom"
                  src={calc}
                  width="200"
                  height="200"
                  alt=""
              />  }
              <blockquote className="card-body bg-light font-italic">
                It is a simple calculator that can achieve basic mathematical expressions and execute easy algorithm work.
                The expression evaluates an infix expression which uses operators +,-,*,/,(,) to evaluate the expressions.
                This project performs like a regular calculator we use every day with simple arithmetic.
              </blockquote>
              <a
                  className="text-dark mt-3"
                  href="https://github.com/Rajdeep0303/Simple-Calculator"
              >
                <i
                    className="fab fa-github about-projects-link"
                    aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>GPA-Calculator</strong>
              </h4>
              { <img
                  className="card-img-bottom"
                  src={gpa}
                  width="200"
                  height="200"
                  alt=""
              />  }
              <blockquote className="card-body bg-light font-italic">
                It is a simple GPA calculator that calculated by dividing the total amount of grade points earned by the total amount of credit hours attempted. Your grade point average may range from 0.0 to a 4.0.
              </blockquote>
              <a
                  className="text-dark mt-3"
                  href="https://github.com/Rajdeep0303/GPA-Calculator"
              >
                <i
                    className="fab fa-github about-projects-link"
                    aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>Imgur Clone</strong>
              </h4>
              { <img
                  className="card-img-bottom"
                  src={imgur}
                  width="200"
                  height="200"
                  alt=""
              />  }
              <blockquote className="card-body bg-light font-italic">
                The goal of this project was to recreate the an imgur-like experience.
                It is image hosting service allows individuals to upload images.
              </blockquote>
              <a
                  className="text-dark mt-3"
                  href="https://github.com/Rajdeep0303/Imgur-clone"
              >
                <i
                    className="fab fa-github about-projects-link"
                    aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>Portfolio</strong>
              </h4>
              { <img
                  className="card-img-bottom"
                  src={portfolio}
                  width="200"
                  height="200"
                  alt=""
              />  }
              <blockquote className="card-body bg-light font-italic">
                The main goals of this project was to display my works, details, projects and experience.
              </blockquote>
              <a
                  className="text-dark mt-3"
                  href="https://github.com/Rajdeep0303/rajdeep0303.github.io"
              >
                <i
                    className="fab fa-github about-projects-link"
                    aria-hidden="true"
                ></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Rajdeep;
