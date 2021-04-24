import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const OwnerLogin = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        className="signup-signin-form"
        method="post"
        encType="application/x-www-form-urlencoded"
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="font-weight-bold primary-color text-center">
            Restaurant Owner Login
          </h2>
          <label htmlFor="Email" className="login-label">
            Email
          </label>
          <input
            className="login_input-field"
            type="email"
            id="displayNameInput"
            name="displayName"
            placeholder="e.g. john.doe@gmail.com"
            required
          />
          <label htmlFor="Password" className="login-label">
            Password
          </label>
          <input
            className="login_input-field"
            type="password"
            id="passwordInput"
            name="password"
            placeholder="must have atleast 6 characters"
            required
          />
          <br />
          <br />
          <a href="/">Forgot Password?</a> <br />
          <Link to="/OwnerSignup">Don't have an account?</Link> <br />
          <br />
          <button
            type="submit"
            className="login_button d-flex align-items-center justify-content-center"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default OwnerLogin;
