import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/bootstrap/bootstrap-about.min.css';
import '../assets/css/about.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import 'font-awesome/css/font-awesome.min.css';
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
      <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">
            TEAM 04
          </a>
          <button
            data-toggle="collapse"
            data-target="#navbarResponsive"
            className="navbar-toggler"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
      <header
        className="masthead"
        style={{ backgroundImage: `url(${Backdrop})`, height: '100vh' }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <div className="site-heading">
                <h1 style={{fontWeight: '800'}}>CSC 648</h1>
                <span className="subheading">
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
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-center" style={{fontWeight: '800'}}>
              About
            </h1>
            <br/>
            <p data-aos="fade-up" data-aos-duration="1000" className="text-center about-text">
              We're Team 04 in CSC 648, Section 03, Spring 2021.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000" className="text-justify about-text">
              We're all senior undergrad or grad Computer Science majors at San Francisco State University. This web app serves as a capstone project.
              <br />
            </p>
            <p data-aos="fade-up" data-aos-duration="1000" className="text-justify about-text">
              The backend is built with JavaScript and MySQL served
              on an Express framework with NGINX, hosted on an AWS EC2 instance,
              with the frontend built with Node, React, and Bootstrap.
              <br />
              <br />
            </p>
            <div className="card-group" data-aos="fade-up" data-aos-duration="1000">
              <div className="card border">
                <img
                  className="card-img-top w-100 d-block"
                  src={Rajdeep}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Rajdeep</h4>
                  <p className="card-text">Team Lead</p>
                  <Link to='/rajdeep'>
                  <button className="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div className="card border">
                <img
                  className="card-img-top w-100 d-block"
                  src={Rinay}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Rinay</h4>
                  <p className="card-text">Backend Lead</p>
                  <Link to='/rinay'>
                  <button className="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div className="card border">
                <img
                  className="card-img-top w-100 d-block"
                  src={Bhavani}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Bhavani</h4>
                  <p className="card-text">Frontend Lead</p>
                  <Link to='/bhavani'>
                  <button className="btn btn-info" type="button">
                  More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <p></p>
            <div className="card-group" data-aos="fade-up" data-aos-duration="1000">
              <div className="card border">
                <img
                  className="card-img-top w-100 d-block"
                  src={Frederick}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Frederick</h4>
                  <p className="card-text">Github Master</p>
                  <Link to='/frederick'>
                  <button className="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div className="card border">
                <img
                  className="card-img-top w-100 d-block"
                  src={German}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">German</h4>
                  <p className="card-text">Frontend Team</p>
                  <Link to='/german'>
                  <button className="btn btn-info" type="button">
                    More
                  </button>
                  </Link>
                </div>
              </div>
              <div className="card border">
                <img
                  className="card-img-top w-100 d-block"
                  src={Henzon}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Henzon</h4>
                  <p className="card-text">Backend Team</p>
                  <Link to='/henzon'>
                  <button className="btn btn-info" type="button">
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
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <p className="text-muted copyright" style={{fontSize: 'x-small'}}>© 2021 Team 04</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
