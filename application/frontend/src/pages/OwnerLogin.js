import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const OwnerLogin = () => {
  return (
    <div className="container">
      <form
        id="login-form"
        method="post"
        encType="application/x-www-form-urlencoded"
      >
        <input id="redirect-input" type="hidden" name="redirect" />

        <fieldset className="login_fieldset-form">
          <legend className="login_page-title text-center">
            Restaurant Owner Login
          </legend>

          <login_label>Email</login_label>
          <input
            className="login_input-field"
            type="text"
            id="displayNameInput"
            name="displayName"
            placeholder="e.g. john.doe@gmail.com"
            required
          />

          <login_label>Password</login_label>
          <input
            className="login_input-field"
            type="password"
            id="passwordInput"
            name="password"
            placeholder="must have atleast 6 characters"
            required
          />
          <br />

          <a href="/register" className="">
            Forgot Password?
          </a>
          <Link to="/OwnerSignup">Don't have an account?</Link>
          <br />
          <button type="submit" className="login_button">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default OwnerLogin;
