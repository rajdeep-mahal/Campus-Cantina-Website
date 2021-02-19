import React from 'react';
import '../assets/bootstrap/bootstrap-raj.min.css';
import '../assets/css/rajdeep/Projects-Clean.css';
import '../assets/css/rajdeep/Social-Icons.css';
import '../assets/css/rajdeep/styles.css';
import '../assets/css/rajdeep/fonts/ionicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Images
import Rajpic from '../assets/img/rajdeep/rajdeep.jpeg'; 
import SFSU from '../assets/img/rajdeep/sfsu.jpeg';
import Skills from '../assets/img/rajdeep/skills.png';
import Tank from '../assets/img/rajdeep/tank.png';
import Imgur from '../assets/img/rajdeep/imgur.png';
import Calc from '../assets/img/rajdeep/calc.png';
import Interpreter from '../assets/img/rajdeep/interpreter.png';
import Portfolio from '../assets/img/rajdeep/portfolio.png';

const Rajdeep = () => {
  AOS.init();

  return (
    <div>
      <section data-aos="fade-up" data-aos-duration="500">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            style={{textAlign: 'center', width: '100%', paddingTop: '40px', paddingBottom: '5px'}}
          >
            About me
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            style={{textAlign: 'center', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px'}}
          >
            --who i am--
          </h1>
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            className="logo"
            src={Rajpic}
            style={{width: '250px', height: '250px', padding: '5px'}}
            alt=""
          />
          <h1
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            style={{paddingTop: '10px'}}
          >
            I'm Rajdeep Singh
          </h1>
          <p
            className="text-justify"
            data-aos="fade-up"
            data-aos-duration="500"
            id="about"
            style={{padding: '12px', paddingTop: '10px', paddingBottom: '40px', width: '524px', textAlign: 'left'}}
          >
            My name is Rajdeep Singh, and I am from the Bay Area. I am a second
            year student of computer science at SFSU. I have achieved many
            different goals in life. Some of my achievements are bigger than the
            others, which has given me greater satisfaction. My specialties
            include quickly learning new skills, responsive design principles
            and problem solving. I am still grabbing the other programming
            languages, principles and frameworks.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="social-icons">
          <a href="https://github.com/Rajdeep0303">
            <i
              className="icon ion-social-github border rounded-0 border-dark"
              style={{width: '60px', color: 'rgb(0,0,0)'}}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/rajdeep-singh-b57a13202/">
            <i
              className="icon ion-social-linkedin border rounded-0 border-dark"
              style={{color: 'rgb(0,0,0)'}}
            ></i>
          </a>
          <a href="mailto:mahalrajdeepsingh@gmail.com">
            <i
              className="icon ion-email border rounded-0 border-dark"
              style={{color: 'rgb(0,0,0)'}}
            ></i>
          </a>
        </div>
      </section>
      <section data-aos="fade-up" data-aos-duration="500">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          style={{textAlign: 'center', paddingTop: '50px'}}
        >
          My Skills
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          style={{textAlign: 'center', fontSize: '20px'}}
        >
          --what i know--
        </h1>
        <img
          data-aos="fade-up"
          data-aos-duration="500"
          className="skill"
          src={Skills}
          style={{width: '762px', height: '443px', textAlign: 'center'}}
          alt=""
        />
      </section>
      <section data-aos="fade-up" data-aos-duration="500">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          style={{textAlign: 'center', paddingTop: '40px', paddingBottom: '40px'}}
        >
          <strong>Education</strong>
        </h1>
        <div className="row projects" data-aos="fade-up" data-aos-duration="500">
          <div
            className="col-sm-6 col-lg-5 offset-lg-3 item"
            data-aos="fade-up"
            data-aos-duration="500"
            id="center"
            style={{width: '520px', margin: 'auto', padding: 'auto', textAlign: 'center'}}
          >
            <img className="img-fluid" id="sfsu" src={SFSU} alt="" />
            <h3
              className="name"
              style={{fontSize: '25px', paddingTop: '40px', textAlign: 'center', paddingBottom: '2'}}
            >
              <strong>San Francisco State University</strong>
            </h3>
            <p
              className="description"
              style={{color: 'rgb(0,0,0)', textAlign: 'center', paddingTop: '10px', paddingBottom: '2px'}}
            >
              <strong>Bachelor of Science - BS - Computer Science</strong>
              <br />
              <strong>2019 - 2023</strong>
            </p>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" data-aos-duration="500">
        <section className="projects-clean">
          <div className="container">
            <div className="intro">
              <h2
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                style={{paddingTop: '100px', paddingBottom: '0px'}}
              >
                <strong>Recent Projects</strong>
              </h2>
              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                style={{borderColor: 'rgb(125, 130, 133)', fontSize: '18px'}}
              >
                All projects can be found in GitHub with source code{' '}
              </p>
            </div>
            <div className="row projects">
              <div
                className="col-sm-6 col-lg-4 item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  className="img-fluid"
                  src={Tank}
                  style={{height: '200px'}}
                  alt=""
                />
                <h3 className="name">
                  <strong>Tank Game</strong>
                </h3>
                <p className="description">
                  The goal of this term project was to build a 2D tank game
                  written in Java language. The tank game goal was to destroy
                  the enemy tank. The Player needs to bring the other tank
                  player life to zero. A player who brings another player life
                  to the zero twice that, a person will win the game.
                  <br />
                  <br />
                  <br />
                </p>
                <a href="https://github.com/Rajdeep0303">GitHub</a>
              </div>
              <div
                className="col-sm-6 col-lg-4 item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  className="img-fluid"
                  src={Imgur}
                  style={{height: '200px', width: '220px'}}
                  alt=""
                />
                <h3 className="name">
                  Imgur Clone
                  <br />
                </h3>
                <p className="description">
                  The goal of this project was to recreate the an imgur-like
                  experience. It is image hosting service allows individuals to
                  upload images.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <a href="https://github.com/Rajdeep0303">GitHub</a>
              </div>
              <div
                className="col-sm-6 col-lg-4 item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  className="img-fluid"
                  src={Calc}
                  style={{height: '200px', width: '210px'}}
                  alt=""
                />
                <h3 className="name">
                  Expression Evaluator
                  <br />
                </h3>
                <p className="description">
                  It is a simple calculator that can achieve basic mathematical
                  expressions and execute easy algorithm work. The expression
                  evaluates an infix expression which uses operators +,-,*,/,(,)
                  to evaluate the expressions. This project performs like a
                  regular calculator we use every day with simple arithmetic.
                  <br />
                  <br />
                </p>
                <a href="https://github.com/Rajdeep0303">GitHub</a>
              </div>
              <div
                className="col-sm-6 col-lg-4 item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  className="img-fluid"
                  src={Interpreter}
                  alt=""
                />
                <h3 className="name">
                  The Interpreter
                  <br />
                </h3>
                <p className="description">
                  This project is an interpreter program for the mock language
                  X. The main goal of the program is to interprets byte codes of
                  programs written in mock language X.
                  <br />
                  <br />
                  <br />
                </p>
                <a href="https://github.com/Rajdeep0303">GitHub</a>
              </div>
              <div
                className="col-sm-6 col-lg-4 item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  className="img-fluid"
                  src={Portfolio}
                  alt=""
                />
                <h3 className="name">
                  Portfolio
                  <br />
                </h3>
                <p className="description">
                  The main goals of this project was to display my works,
                  details, projects and experience.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <a href="https://github.com/Rajdeep0303">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <h5 style={{width: '100%', textAlign: 'center'}}>
          Copyright By&nbsp;
          <a href="mailto:mahalrajdeepsingh@gmail.com">Rajdeep</a>&nbsp;(c) 2021
          All rights reserved.
        </h5>
      </footer>
    </div>
  );
};

export default Rajdeep;
