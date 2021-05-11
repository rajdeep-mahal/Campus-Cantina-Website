import React, {useState} from 'react';
import '../assets/css/login_Signup.css';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

const SFSUSignup = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form id="registration" className="signup-signin-form" method="POST">
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="font-weight-bold primary-color text-center">
            Sign Up
          </h2>
          <p className="mt-3 text-info text-center">All fields are Mandatory</p>
          <label htmlFor="username" className="login-label first-label">
            Name
          </label>
          <input
            id="username"
            className="login_input-field"
            type="text"
            placeholder="e.g. John Doe"
            required
            name="Name"
          />
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            className="login_input-field"
            id="email"
            type="email"
            placeholder="e.g. john.doe@mail.sfsu.edu"
            required
            name="email"
          />
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            className="login_input-field"
            id="password"
            type="password"
            placeholder="must have atleast 6 characters"
            required
            name="Password"
          />
          <label htmlFor="PassConfirmation" className="login-label">
            Confirm Password
          </label>
          <input
            className="login_input-field"
            id="PassConfirmation"
            type="password"
            placeholder="must have atleast 6 characters"
            required
            name="cpassword"
          />
          <div className="form-check mt-4 ml-1">
            <input
              className="form-check-input mt-2"
              type="checkbox"
              value=""
              id="defaultCheck1"
              required
            />
            <label htmlFor="defaultCheck1 Warning" className="form-check-label">
              I Agree to the <u>Terms & Conditions</u>
            </label>
          </div>
          <br />
          <a href="/">Forgot Password?</a> <br />
          <Link to="/SFSULogin">Already Registered?</Link> <br />
          <br />
          <button
            type="submit"
            className="login_button d-flex align-items-center justify-content-center"
            value="Register"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SFSUSignup;
