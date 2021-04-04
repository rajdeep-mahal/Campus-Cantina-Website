import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const SFSUSignup = () => {
  return (
    <div>
      <form id="registration" className="registration" method="POST">
        <input
          className="login_input-field"
          id="redirect-input"
          type="hidden"
          name="redirect"
        />
        <fieldset className="login_fieldset-form2">
          <legend className="login_page-title">Register my account</legend>
          <login_label htmlFor="username">
            Name
            <input
              id="username"
              className="login_input-field"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </login_label>

          <login_label htmlFor="email"> Email "@mail.sfsu.edu" </login_label>
          <input
            className="login_input-field"
            id="email"
            type="email"
            placeholder="Email"
            required
            name="email ''@mail.sfsu.edu'' "
          />

          <login_label htmlFor="password">
            Password
            <input
              className="login_input-field"
              id="password"
              type="password"
              placeholder="Password"
              required
              name="Password"
            />
          </login_label>

          <login_label htmlFor="PassConfirmation">
            Confirm Password
            <input
              className="login_input-field"
              id="PassConfirmation"
              type="password"
              placeholder="Confirm Password"
              required
              name="cpassword"
            />
          </login_label>
          <br />

          <Link to="/SFSULogin">Have an account?</Link>
          <br />
          <button type="submit" className="login_button" value="Register">
            Sign up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SFSUSignup;
