import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const OwnerSignup = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form id="registration" className="registration-form" method="POST" action="/users/register">
        <input id="redirect-input" type="hidden" name="redirect"/>
        <h1 className="mb-3 font-weight-light text-center">Register Restaurant Account</h1>

          <login_label htmlFor="name"> Restaurant Name </login_label>
            <input
              id="name"
              className="login_input-field"
              type="text"
              placeholder="e.g. Chipotoplay"
              required
              name="Restaurant Name"
            />

          <login_label htmlFor="address">Restaurant Address </login_label>
            <input
              id="address"
              className="login_input-field"
              type="text"
              placeholder="e.g. 2090 Chestnut St, San Francisco, CA"
              required
              name="Restaurant Address"
            />

          <login_label htmlFor="contactNumber">Restaurant Contact Number </login_label>
            <input
              id="contactNumber"
              className="login_input-field"
              type="text"
              placeholder="e.g. 415-999-9999"
              required
              name="Restaurant Contact Number"
            />

          <login_label htmlFor="email"> Email </login_label>
          <input
            className="login_input-field"
            id="email"
            type="email"
            placeholder="e.g. john.doe@gmail.com"
            required
            name="email"
          />

          <login_label htmlFor="password">Password </login_label>
            <input
              className="login_input-field"
              id="password"
              type="password"
              placeholder="must have atleast 6 characters"
              required
              name="Password"
            />

          <login_label htmlFor="PassConfirmation">Confirm Password </login_label>
            <input
              className="login_input-field"
              id="PassConfirmation"
              type="password"
              placeholder="must have atleast 6 characters"
              required
              name="cpassword"
            />

        <br/><br/>
        <a href="/">Forgot Password?</a> <br/>
        <Link to="/OwnerLogin">Have an account?</Link> <br/><br/>
        <button type="submit" className="login_button d-flex align-items-center justify-content-center" value="Register">Sign up</button>
      </form>
    </div>
  );
};

export default OwnerSignup;
