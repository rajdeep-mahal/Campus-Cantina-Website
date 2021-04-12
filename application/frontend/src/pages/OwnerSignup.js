import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const OwnerSignup = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        id="registration"
        className="signup-signin-form"
        method="POST"
        action="/users/register"
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="mb-3 font-weight-bold primary-color text-center">
            Restaurant Owner <br />
            Sign Up
          </h2>
          <label htmlFor="name" className="login-label">
            Restaurant Name
          </label>
          <input
            id="name"
            className="login_input-field"
            type="text"
            placeholder="e.g. Chipotoplay"
            required
            name="Restaurant Name"
          />
          <label htmlFor="address" className="login-label">
            Restaurant Address{' '}
          </label>
          <input
            id="address"
            className="login_input-field"
            type="text"
            placeholder="e.g. 2090 Chestnut St, San Francisco, CA"
            required
            name="Restaurant Address"
          />
          <label htmlFor="contactNumber" className="login-label">
            Restaurant Contact Number{' '}
          </label>
          <input
            id="contactNumber"
            className="login_input-field"
            type="text"
            placeholder="e.g. 415-999-9999"
            required
            name="Restaurant Contact Number"
          />
          <label htmlFor="email" className="login-label">
            {' '}
            Email{' '}
          </label>
          <input
            className="login_input-field"
            id="email"
            type="email"
            placeholder="e.g. john.doe@gmail.com"
            required
            name="email"
          />
          <label htmlFor="password" className="login-label">
            Password{' '}
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
            Confirm Password{' '}
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
          <Link to="/OwnerLogin">Already Registered?</Link> <br />
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

export default OwnerSignup;
