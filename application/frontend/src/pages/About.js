import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/bootstrap/bootstrap-about.min.css';
import '../assets/css/about.css'
import AOS from 'aos';
import "aos/dist/aos.css";
// Images
import Backdrop from '../assets/img/about/backdrop.jpeg';
import Rajdeep from '../assets/img/about/rajdeep.jpg';
import Rinay from '../assets/img/about/rinay.jpg';
import Bhavani from '../assets/img/about/bhavani.jpg';
import Frederick from '../assets/img/about/frederick.jpg';
import German from '../assets/img/about/german.jpg';
import Henzon from '../assets/img/about/henzon.jpg';

const About = () => {
  
  AOS.init();
  
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="/">
            TEAM 04
          </a>
          <button
            data-toggle="collapse"
            data-target="#navbarResponsive"
            class="navbar-toggler"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
      <header
        class="masthead"
        style={{ backgroundImage: `url(${Backdrop})`, height: '100vh' }}
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
              <div class="site-heading">
                <h1 style={{fontWeight: '800'}}>CSC 648</h1>
                <span class="subheading">
                  <strong>San Francisco State University</strong>
                  <br />
                  <br />
                  Spring 2021
                </span>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <h1 data-aos="fade-up" data-aos-duration="1000" class="text-center" style={{fontWeight: '800'}}>
              About
            </h1>
            <br/>
            <p data-aos="fade-up" data-aos-duration="1000" class="text-center about-text">
              We're Team 04 in CSC 648, Section 03, Spring 2021.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000" class="text-justify about-text">
              We're all senior undergrad or grad Computer Science majors at San Francisco State University. This web app serves as a capstone project.
              <br />
            </p>
            <p data-aos="fade-up" data-aos-duration="1000" class="text-justify about-text">
              The backend is built with JavaScript and MySQL served
              on an Express framework with NGINX, hosted on an AWS EC2 instance,
              with the frontend built with Node, React, and Bootstrap.
              <br />
              <br />
            </p>
            <div class="card-group" data-aos="fade-up" data-aos-duration="1000">
              <div class="card border">
                <img
                  class="card-img-top w-100 d-block"
                  src={Rajdeep}
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Rajdeep</h4>
                  <p class="card-text">Team Lead</p>
                  <Link to='/rajdeep'>
                  <button class="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div class="card border">
                <img
                  class="card-img-top w-100 d-block"
                  src={Rinay}
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Rinay</h4>
                  <p class="card-text">Backend Lead</p>
                  <Link to='/rinay'>
                  <button class="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div class="card border">
                <img
                  class="card-img-top w-100 d-block"
                  src={Bhavani}
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Bhavani</h4>
                  <p class="card-text">Frontend Lead</p>
                  <Link to='/bhavani'>
                  <button class="btn btn-info" type="button">
                  More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <p></p>
            <div class="card-group" data-aos="fade-up" data-aos-duration="1000">
              <div class="card border">
                <img
                  class="card-img-top w-100 d-block"
                  src={Frederick}
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Frederick</h4>
                  <p class="card-text">Github Master</p>
                  <Link to='/frederick'>
                  <button class="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div class="card border">
                <img
                  class="card-img-top w-100 d-block"
                  src={German}
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">German</h4>
                  <p class="card-text">Frontend Team</p>
                  <Link to='/german'>
                  <button class="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div class="card border">
                <img
                  class="card-img-top w-100 d-block"
                  src={Henzon}
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Henzon</h4>
                  <p class="card-text">Backend Team</p>
                  <Link to='/henzon'>
                  <button class="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
              <p class="text-muted copyright" style={{fontSize: 'x-small'}}>© 2021 Team 04</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
