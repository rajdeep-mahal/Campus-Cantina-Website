import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const OwnerLogin = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form className="login-form" method="post" encType="application/x-www-form-urlencoded">
        <input id="redirect-input" type="hidden" name="redirect" />
        <h1 className="mb-3 font-weight-light text-center">Restaurant Owner Login</h1>

        <login_label>Email</login_label>
        <input
            className="login_input-field"
            type="email"
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

        <br/><br/>
        <a href="/">Forgot Password?</a> <br/>
        <Link to="/OwnerSignup">Don't have an account?</Link> <br/><br/>
        <button type="submit" className="login_button d-flex align-items-center justify-content-center">Login</button>
      </form>
    </div>
  );
};

export default OwnerLogin;
