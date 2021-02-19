import React from 'react';
//import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/rinay.css';
// Images
import Profile from '../assets/img/rinay/profile.jpeg';
import Discord from '../assets/img/rinay/discord.png';
import Github from '../assets/img/rinay/github.png';
import Linkedin from '../assets/img/rinay/linkedin.png';
import Email from '../assets/img/rinay/email2.png';
import SFSU from '../assets/img/rinay/sfsu.png';
import Apple from '../assets/img/rinay/apple.png';

const Rinay = () => {
  return (
    <div>
      <section id="header" style={{ textAlign: 'center' }}>
        <div class="card">
          <div class="card-body text-center justify-content-center align-self-center header-card">
            <img
              class="rounded-circle img-fluid"
              src={Profile}
              width="150"
              alt="Profile"
            />
            <h1 class="card-title name">Rinay Kumar</h1>
            <h6 class="text-muted card-subtitle mb-2">(he/him/his)</h6>
            <p class="card-text">Student at San Francisco State University</p>
            <div class="d-flex profile-links">
              <img
                class="rounded-circle"
                src={Discord}
                height="20"
                alt="Discord logo"
              />
              <div class="text-center d-flex">
                <p class="links">&nbsp;rinaykumar#6920</p>
              </div>
            </div>
            <div class="d-flex profile-links" id="profile-links-1">
              <img src={Github} height="20" alt="Github logo" />
              <div class="text-center d-flex">
                <p class="links">
                  &nbsp;
                  <a
                    href="https://github.com/rinaykumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/rinaykumar
                  </a>
                </p>
              </div>
            </div>
            <div class="d-flex profile-links" id="profile-links-2">
              <img
                class="rounded-circle"
                src={Linkedin}
                height="20"
                alt="LinkedIn logo"
              />
              <div class="text-center d-flex">
                <p class="links">
                  &nbsp;
                  <a
                    href="https://www.linkedin.com/in/rinaykumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/rinaykumar
                  </a>
                  <br />
                </p>
              </div>
            </div>
            <div class="d-flex profile-links" id="profile-links-3">
              <img
                class="rounded-circle"
                src={Email}
                height="20"
                alt="Email symbol"
              />
              <div class="text-center d-flex">
                <p class="links">
                  &nbsp;
                  <a href="mailto:rkumar4@mail.sfsu.edu">
                    rkumar4@mail.sfsu.edu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="text-center d-sm-flex d-md-flex d-lg-flex justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
        id="education"
        style={{ textAlign: 'center' }}
      >
        <div class="card text-center edu-card">
          <div class="card-body text-center">
            <h4 class="text-left card-title">Education</h4>
            <img class="ed-img" src={SFSU} alt="SFSU section" />
          </div>
        </div>
      </section>
      <section
        class="text-center d-sm-flex d-md-flex d-lg-flex justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
        id="experience"
        style={{ textAlign: 'center' }}
      >
        <div class="card text-center edu-card">
          <div class="card-body text-center ed-img">
            <h4 class="text-left card-title">Experience</h4>
            <img class="ed-img" src={Apple} alt="Apple section" />
          </div>
        </div>
      </section>
      <section
        class="text-center d-sm-flex d-md-flex d-lg-flex justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"
        id="projects"
        style={{ textAlign: 'center' }}
      >
        <div class="card text-center edu-card">
          <div class="card-body text-center">
            <h4 class="text-left card-title">Projects</h4>
            <div class="text-center">
              <div>
                <h5 class="text-left proj-title">2CHAINZ OR BOT</h5>
                <div class="edu-info" style={{ textAlign: 'left' }}>
                  <p class="text-left proj-p">
                    <a
                      href="https://www.2chainzorbot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2chainzorbot.com
                    </a>
                  </p>
                  <p class="text-left year">2021</p>
                  <p class="text-left proj-p">
                    A fullstack web application built with Python3 and Flask for
                    the backend, and with Node.js and React.js for the frontend.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center soda-div">
              <h5 class="text-left proj-title">sodaChat</h5>
              <div class="edu-info" style={{ textAlign: 'left' }}>
                <p class="text-left proj-p">
                  <a
                    href="https://sodachat.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sodachat.net
                  </a>
                </p>
                <p class="text-left year">2020</p>
                <p class="text-left proj-p">
                  Fullstack live chat web application built with a great team.
                  Backend: Java, Spark, Maven, MongoDB, WebSocket. Frontend:
                  React.js, Node.js, Express.js, HTML, CSS
                </p>
              </div>
            </div>
            <div class="text-center word-div">
              <h5 class="text-left proj-title">Word Blast</h5>
              <div class="edu-info" style={{ textAlign: 'left' }}>
                <p class="text-left proj-p">
                  <a
                    href="https://github.com/rinaykumar/word-blast"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/rinaykumar/word-blast
                  </a>
                </p>
                <p class="text-left year">2020</p>
                <p class="text-left proj-p">
                  A CLI program built with C, pthreads, and Linux system calls.
                  Takes a text file, parses it, finds words with 6 or more
                  characters, counts their occurrences, then displays the top 10
                  most used 6+ character words, using concurrent threads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p class="text-center footer-text">©2021 rinaykumar</p>
      </footer>
    </div>
  );
};

export default Rinay;
