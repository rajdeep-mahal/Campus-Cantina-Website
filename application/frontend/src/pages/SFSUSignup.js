import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const SFSUSignup = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form id="registration" className="signup-signin-form" method="POST">
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="mb-3 font-weight-bold primary-color text-center">
            Sign Up
          </h2>
          <label htmlFor="username" className="login-label">
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
          <br />
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
