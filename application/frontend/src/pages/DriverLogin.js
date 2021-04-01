import React from 'react';

const DriverLogin = () => {

  return (
      <div className="container">
          <form id="login-form" method="post" encType="application/x-www-form-urlencoded">
              <input id="redirect-input" type="hidden" name="redirect" />

              <fieldset className="login_fieldset-form">
                  <legend className="login_page-title">Driver Login</legend>

                  <login_label>Email</login_label>
                  <input className="login_input-field" type="text" id="displayNameInput" name="displayName" placeholder="Email" required />

                  <login_label>Password</login_label>
                  <input className="login_input-field" type="password" id="passwordInput" name="password" placeholder="Password" required />
                  <br/>

                  <a href="/" className="card-link">&nbsp;Forgot Password?</a>
                  <Link to="/DriverSignup">&nbsp;Don't have an account?</Link>
                  <br/>
                  <button type="submit" className="login_button">Login</button>
              </fieldset>
          </form>
      </div>
  );
};

export default DriverLogin