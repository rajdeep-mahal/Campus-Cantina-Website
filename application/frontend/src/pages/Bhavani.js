import React from "react";
import ProfilePic from "../assets/img/about/bhavani.jpg";
import PythonLogo from "../assets/img/bhavani/python.png";
import NodeLogo from "../assets/img/bhavani/node.png";
import CSSLogo from "../assets/img/bhavani/css.png";
import HTMLLogo from "../assets/img/bhavani/html.png";
import JSLogo from "../assets/img/bhavani/javascript.png";
import JinjaLogo from "../assets/img/bhavani/jinja.png";
import FlaskLogo from "../assets/img/bhavani/flask.png";
import ReactLogo from "../assets/img/bhavani/react.png";
import "../assets/css/bhavani.css";

const Bhavani = () => {
  return (
    <div className="bhvpage">
      <section className="bhvheader">
        <div className="container grid">
          <div className="bhavabt" style={{ width: "20rem" }}>
            <img
              className="rounded-circle"
              src={ProfilePic}
              alt="profilepicture"
            />
          </div>
          <div className="bhvabout-text">
            <h1>About Me</h1>
            <h4>Bhavani Goruganthu</h4>
            <p>
              Graduate Student <br /> San Francisco State University
            </p>
          </div>
        </div>
      </section>
      <section className="desc">
        <div
          className="container grid"
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          <section className="desc-card">
            <i
              className="fa fa-university"
              aria-hidden="true"
              style={{ paddingRight: 20 }}
            ></i>
            <i className="fas fa-server" style={{ paddingRight: 20 }}></i>
            <i className="fas fa-heart" style={{ paddingRight: 20 }} />
            <i className="fas fa-music"></i>
            <p>
              Hello there, this is Bhavani. I am a second semester graduate
              student in Computer Science at SFSU.
              <br />
              I am interested in full-stack development and I am keen to gather
              experience in UI/UX designing as well.
              <br />
              Little about myself, I am originally from Hyderabad, India. I
              moved to the USA in 2018 and currently reside in Sunnyvale,
              California. <br />
              Capturing moments is one of my several interests. I likewise
              prefer to binge-watch Netflix movies/series & listen to pleasant
              music.
            </p>
          </section>
        </div>
        <section className="bhvskills">
          <h2 className="text-center" style={{ padding: "15px" }}>
            Skillset
          </h2>
          <div className="container flex">
            <div className="skillcard">
              <h4>HTML</h4>
              <img src={HTMLLogo} width="74" height="80" alt="" />
            </div>
            <div className="skillcard">
              <h4>CSS</h4>
              <img src={CSSLogo} width="74" height="80" alt="" />
            </div>
            <div className="skillcard">
              <h4>Javascript</h4>
              <img src={JSLogo} width="74" height="80" alt="" />
            </div>
            <div className="skillcard">
              <h4>React.js</h4>
              <img src={ReactLogo} width="74" height="80" alt="" />
            </div>
            <div className="skillcard">
              <h4>Node.js</h4>
              <img src={NodeLogo} alt="" />
            </div>
            <div className="skillcard">
              <h4>Python</h4>
              <img src={PythonLogo} alt="" />
            </div>
            <div className="skillcard">
              <h4>Flask</h4>
              <img src={FlaskLogo} width="74" height="80" alt="" />
            </div>
            <div className="skillcard">
              <h4>Jinja</h4>
              <img src={JinjaLogo} width="74" height="80" alt="" />
            </div>
          </div>
        </section>
        <section className="bhvskills">
          <h2 className="text-center" style={{ padding: "10px" }}>
            Recent Projects
          </h2>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="col-sm-6 col-lg-2 card">
              <h3>
                <strong>Photobook</strong>
              </h3>
              <p>
                <blockquote>
                  A Photobook Website enables users to upload a photo (stored in
                  Cloud Storage) and its metadata (stored in Cloud Datastore).
                  The images are passed on to Google Vision API and are
                  automatically categorized based on the labels returned by the
                  API.
                </blockquote>
              </p>
              <a href="https://github.com/bhavani-goruganthu/CSC847_GAE_Proj2_VisionAPI">
                <i
                  class="fa fa-github"
                  aria-hidden="true"
                  style={{ fontSize: "36px", paddingBottom: "20px" }}
                ></i>
              </a>
            </div>
            <div className="col-sm-6 col-lg-2 card">
              <h3>
                <strong>Student Directory</strong>
              </h3>
              <p>
                <blockquote>
                  A Student Directory Website has been developed which is hosted
                  on the GCE’s instances and enables users to display all the
                  students, add a student and search for students using Cloud
                  SQL for MySQL.
                </blockquote>
              </p>
              <a href="https://github.com/bhavani-goruganthu/gce_studentapp">
                <i
                  class="fa fa-github"
                  aria-hidden="true"
                  style={{ fontSize: "36px", paddingBottom: "20px" }}
                ></i>
              </a>
            </div>
            <div className="col-sm-6 col-lg-2 card">
              <h3>
                <strong>Quote Keeper</strong>
              </h3>
              <p>
                <blockquote>
                  This website saves Quotes on-the-go by using Google Cloud
                  Machine Learning API's. It can be a picture of a quote, a
                  downloaded image, a hand-written quote or a recorded one. All
                  quotes are saved in free text mode in Google Cloud Datastore.
                </blockquote>
              </p>
              <a href="https://github.com/bhavani-goruganthu/Flask-Projects/tree/master/CloudComputing/GP">
                <i
                  class="fa fa-github"
                  aria-hidden="true"
                  style={{ fontSize: "36px", paddingBottom: "20px" }}
                ></i>
              </a>
            </div>
            <div className="col-sm-6 col-lg-2 card">
              <h3>
                <strong>eCommerce Website</strong>
              </h3>
              <p>
                <blockquote>
                  This is a single page React app with distributed microservices
                  back end which is developed based on latest technologies like
                  Redis, Kafka, WebSocket, ReacttJS, ExpressJS, Mongodb.
                </blockquote>
              </p>
              <a href="https://github.com/bhavani-goruganthu/final-project-listy">
                <i
                  class="fa fa-github"
                  aria-hidden="true"
                  style={{ fontSize: "36px", paddingBottom: "20px" }}
                ></i>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Bhavani;
