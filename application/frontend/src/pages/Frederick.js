import React from "react";
import "../assets/css/about_individual.css";

import ProfilePic from "../assets/img/about/frederick/frederick.jpg";
import FlutterLogo from "../assets/img/about/frederick/flutter.png";
import JavaLogo from "../assets/img/about/frederick/java.png";
import AndroidLogo from "../assets/img/about/frederick/android.png";
import CPlusPlusLogo from "../assets/img/about/frederick/cplusplus.png";

import ReactLogo from "../assets/img/about/bhavani/react.png";
import PythonLogo from "../assets/img/about/bhavani/python.png";
import CSSLogo from "../assets/img/about/bhavani/css.png";
import HTMLLogo from "../assets/img/about/bhavani/html.png";

const Frederick = () => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
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
            <h4>Frederick White</h4>
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
            <i className="fas fa-university mr-2" />
            <i className="fas fa-mountain mr-2" />
            <i className="fas fa-guitar mr-2" />
            <i className="fas fa-music mr-2" />
          </div>
          <div className="card-body bg-light">
            <p>
              <i>
                Hello I am a senior studying Computer Science at SFSU.
                <br />
                I am interested in mobile app development and I also want to
                learn more about full-stack development.
                <br />
                Some more about me, I grew up in Florida before moving to
                California in 2015. I currently live and hope to work in
                the Bay Area.
                <br />
                Outside of programming I enjoy going rock climbing and being
                outdoors. I also like to listen to music and go to concerts.
              </i>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center pt-4">Skillset</h2>
          <div className="container d-flex flex-wrap pt-2">
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Flutter</h4>
              <img src={FlutterLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Java</h4>
              <img src={JavaLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">C++</h4>
              <img src={CPlusPlusLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Android</h4>
              <img src={AndroidLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">HTML</h4>
              <img src={HTMLLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">CSS</h4>
              <img src={CSSLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">React.js</h4>
              <img src={ReactLogo} width="74" height="74" alt="" />
            </div>
            <div className="card about-skill-set mt-2">
              <h4 className="about-skill-name">Python</h4>
              <img src={PythonLogo} width="74" height="74" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center pt-4">Recent Projects</h2>
          <div className="d-flex justify-content-around row text-center flex-wrap mt-3">
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>Mask Helper</strong>
              </h4>
              <blockquote className="card-body bg-light font-italic">
                A mobile app that gives users a notification to wear a mask
                when they leave. Users can choose which locations they want 
                to receive a notification for. Utilizes Google maps and 
                places API. 
              </blockquote>
              {/* <img
                className="card-img-bottom"
                src={Calculator}
                width="200"
                height="200"
                alt=""
              /> */}
              <a
                className="text-dark mt-3"
                href="https://github.com/fwhite95/teamflutterfa_sfhacks2021"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>Evented</strong>
              </h4>
              <blockquote className="card-body bg-light font-italic">
                A mobile application that allows users to search for local
                events at bars, clubs, and venues. Users can lookup events,
                add them to a list, and follow locations to see new events. 
                Utilizes Flutter and Google Firebase to hold user information
              </blockquote>
              {/* <img
                className="card-img-bottom"
                src={Calculator}
                width="200"
                height="200"
                alt=""
              /> */}
              <a
                className="text-dark mt-3"
                href="https://github.com/fwhite95/evented"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>Bookmera</strong>
              </h4>
              <blockquote className="card-body bg-light font-italic">
                Mobile application that allows users to sign in with Google
                sign in and look up gooks using Google books API. Users can 
                search for books or see the books in their reading lists.
                Also utilizes a Firebase ML kit to allow users to search for 
                books through a photo of the book cover. 
              </blockquote>
              {/* <img
                className="card-img-bottom"
                src={Calculator}
                width="200"
                height="200"
                alt=""
              /> */}
              <a
                className="text-dark mt-3"
                href="https://github.com/fwhite95/bookmera"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="about-projects card col-sm-6 col-lg-3 py-3 m-2">
              <h4 className="about-skill-name">
                <strong>DoodleBug</strong>
              </h4>  
              
              <blockquote className="card-body bg-light font-italic">
                This is a C++ project that simulates Doodle bugs. This means
                that it is a simulation of predator/prey interations. 
              </blockquote>
              

              {/* <img
                className="card-img-bottom"
                src={Calculator}
                width="200"
                height="200"
                alt=""
              /> */}
              <a
                className="text-dark mt-3"
                href="https://github.com/fwhite95/DoodleBug_CPP"
              >
                <i
                  className="fab fa-github about-projects-link"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Frederick;
