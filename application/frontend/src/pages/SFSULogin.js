import React, { useState } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import bcrypt from 'bcryptjs';

const SFSULogin = () => {
  const history = useHistory();
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');

  const onSubmitCustomerLogin = (event) => {
    event.preventDefault();
    axios
      .get('http://localhost:3001/api/sfsucustomer/customer-info', {
        params: {
          customerEmail: customerEmail,
        },
      })
      .then((res) => {
        bcrypt.compare(
          customerPassword,
          res.data[0].Password,
          (err, isMatch) => {
            if (err) {
              throw err;
            } else if (!isMatch) {
              console.log("Password doesn't match!");
            } else {
              console.log('Password matches!');
              history.push('/');
            }
          }
        );
      });
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        className="signup-signin-form"
        method="post"
        encType="application/x-www-form-urlencoded"
        onSubmit={onSubmitCustomerLogin}
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="font-weight-bold primary-color text-center">Login</h2>
          <label htmlFor="Email" className="login-label">
            Email
          </label>
          <input
            className="login_input-field"
            type="email"
            id="sfsuEmail"
            name="sfsuEmail"
            placeholder="e.g. john.doe@mail.sfsu.edu"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            onBlur={(e) => {
              let temp = customerEmail.trim;
            }}
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
            value={customerPassword}
            onChange={(e) => setCustomerPassword(e.target.value)}
          />
          <br />
          <br />
          <a href="/">Forgot Password?</a> <br />
          <Link to="/SFSUSignup">Don't have an account?</Link> <br />
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

export default SFSULogin;
