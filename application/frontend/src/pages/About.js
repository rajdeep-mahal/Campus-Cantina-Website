import React from "react";
import "../assets/css/about.css";
// Images
import Rajdeep from "../assets/img/about/rajdeep/rajdeep.jpg";
import Rinay from "../assets/img/about/rinay/rinay.jpg";
import Bhavani from "../assets/img/about/bhavani/bhavani.jpg";
import Frederick from "../assets/img/about/frederick/frederick.jpg";
import German from "../assets/img/about/german/german.jpg";
import Henzon from "../assets/img/about/henzon/henzon.jpg";
import Chevron from "../assets/img/about/chevron.png";

const About = () => {
  return (
    <div className="about-home">
      <header className="masthead">
        <div className="container">
          <div className="centered disclaimer">
            <p className="text-white">
              SFSU Software Engineering Project CSC 648-848, Spring 2021 For
              Demonstration Only
            </p>
          </div>
          <div className="centered site-heading">
            <h1 style={{ fontWeight: "800", fontSize: "80px" }}>CSC 648</h1>
            <h3 style={{ fontWeight: "800" }}>TEAM 04</h3>
            <span className="subheading">
              <strong>San Francisco State University</strong>
              <br />
              Spring 2021
            </span>
            <div className="chevron">
              <a href="#about-section">
                <img src={Chevron} height="40px" alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container" id="about-section">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <h1 className="about_animate text-center">About</h1>
            <br />
            <p className="about_animate text-center about-text">
              We're Team 04 in CSC 648, Section 03, Spring 2021.
            </p>
            <p className="about_animate text-justify about-text">
              We're all senior undergrad or grad Computer Science majors at San
              Francisco State University. This web app serves as a capstone
              project.
              <br />
            </p>
            <p className="about_animate text-justify about-text">
              The backend is built with ExpressJS and MySQL served on an Express
              framework with NGINX, hosted on an AWS EC2 instance, with the
              frontend built with React, and Bootstrap.
              <br />
              <br />
            </p>
            <div className="about_animate d-flex justify-content-center align-items-center">
              <div className="card-group team">
                <div className="card border cardalign">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Rajdeep}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Rajdeep
                    </h4>
                    <p className="card-text">Team Lead</p>
                    <a href="/rajdeep">
                      <button
                        className="btn btn-info stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Rinay}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Rinay
                    </h4>
                    <p className="card-text">Backend Lead</p>
                    <a href="/rinay">
                      <button
                        className="btn btn-info stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Bhavani}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Bhavani
                    </h4>
                    <p className="card-text">Frontend Lead</p>
                    <a href="/bhavani">
                      <button
                        className="btn btn-info stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p></p>
            <div className="about_animate d-flex justify-content-center align-items-center">
              <div className="card-group team">
                <div className="card border cardalign">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Frederick}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Frederick
                    </h4>
                    <p className="card-text">GitHub Master</p>
                    <a href="/henzon">
                      <button
                        className="btn btn-info stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign">
                  <img
                    className="card-img-top w-100 d-block"
                    src={German}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      German
                    </h4>
                    <p className="card-text">Frontend Team</p>
                    <a href="/german">
                      <button
                        className="btn btn-info stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Henzon}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: "800" }}>
                      Henzon
                    </h4>
                    <p className="card-text">Backend Team</p>
                    <a href="/henzon">
                      <button
                        className="btn btn-info stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <p
                className="text-muted copyright"
                style={{ fontSize: "x-small" }}
              >
                © 2021 Team 04
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
