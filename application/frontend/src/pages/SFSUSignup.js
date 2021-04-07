import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const SFSUSignup = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form id="registration" className="registration-form" method="POST">
        <input id="redirect-input" type="hidden" name="redirect"/>
        <h1 className="mb-3 font-weight-light text-center">Register Account</h1>

          <login_label htmlFor="username">Name </login_label>
            <input
              id="username"
              className="login_input-field"
              type="text"
              placeholder="e.g. John Doe"
              required
              name="Name"
            />

          <login_label htmlFor="email">Email</login_label>
          <input
            className="login_input-field"
            id="email"
            type="email"
            placeholder="e.g. john.doe@mail.sfsu.edu"
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
          <Link to="/SFSULogin">Have an account?</Link> <br/><br/>
          <button type="submit" className="login_button d-flex align-items-center justify-content-center" value="Register">Sign up</button>
      </form>
    </div>
  );
};

export default SFSUSignup;
