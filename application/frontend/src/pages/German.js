import React from "react";
import "../assets/css/about_individual.css";
import ProfilePic from "../assets/img/about/german/german.jpg";

const German = () => {
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
            <h4>German Perez</h4>
            <p>
              Undergraduate Student <br /> San Francisco State University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default German;
