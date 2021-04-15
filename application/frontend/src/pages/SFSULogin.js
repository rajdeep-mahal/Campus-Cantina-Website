import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const SFSULogin = () => {
  return (
      <div className="login_container">
          <form id="login-form" method="post" encType="application/x-www-form-urlencoded">
              <input id="redirect-input" type="hidden" name="redirect" />
              <fieldset className="login_fieldset-form">

                  <legend className="login_page-title">Login</legend>

                  <login_label>Email "@mail.sfsu.edu"</login_label>
                  <input className="login_input-field" type="text" id="displayNameInput" name="displayName" placeholder="Email ''@mail.sfsu.edu'' " required />

                  <login_label>Password</login_label>
                  <input className="login_input-field" type="password" id="passwordInput" name="password" placeholder="Password" required />
                  <br />

                  <a href="/register" className="card-link">&nbsp;Forgot Password?</a>
                  <Link to="/SFSUSignup">&nbsp;Don't have an account?</Link>
                  <br />
                  <button type="submit" className="login_button">Login</button>
              </fieldset>
          </form>
      </div>
  );
};

export default SFSULogin