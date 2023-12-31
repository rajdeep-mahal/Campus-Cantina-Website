import React, { useState } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { setAppUser } from '../redux/actions/appUserActions';
import { useDispatch } from 'react-redux';

const OwnerLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPassword, setOwnerPassword] = useState('');

  // show error alert for invalid email suffix
  const [showInvalidEmailAlert, setShowInvalidEmailAlert] = useState(false);
  const [showInvalidPasswordAlert, setShowInvalidPasswordAlert] =
    useState(false);

  const onSubmitOwnerLogin = (event) => {
    event.preventDefault();
    loginOwner();
  };

  const loginOwner = () => {
    axios
      .get('http://localhost:3001/api/restaurant/owner-info', {
        params: {
          ownerEmail: ownerEmail,
        },
      })
      .then((res) => {
        bcrypt.compare(ownerPassword, res.data[0].Password, (err, isMatch) => {
          if (err) {
            throw err;
          } else if (!isMatch) {
            //Password doesn't match!
            setShowInvalidEmailAlert(false);
            setShowInvalidPasswordAlert(true);
          } else {
            // 'Password matches!'
            setShowInvalidEmailAlert(false);
            setShowInvalidPasswordAlert(false);
            history.push('/');
            loginAppUser(ownerEmail, res.data[0].Name);
          }
        });
      })
      .catch((err) => {
        setShowInvalidEmailAlert(true);
        setShowInvalidPasswordAlert(false);
      });
  };

  const loginAppUser = (useremail, username) => {
    axios
      .get('/start-session', {
        params: {
          email: useremail,
          type: 'owner',
          name: username,
        },
      })
      .then((res) => {
        dispatch(setAppUser(res.data));
        history.push('owner/menu');
      });
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div>
        {showInvalidEmailAlert ? (
          <div
            className="text-center mx-auto mt-2 alert alert-danger fade show w-100"
            role="alert"
          >
            <b>Email Address is not registered with us.</b> <br />{' '}
            <i>
              Please <Link to="/OwnerSignup">Register</Link>
            </i>{' '}
          </div>
        ) : (
          <> </>
        )}

        {showInvalidPasswordAlert ? (
          <div
            className="text-center mx-auto mt-2 alert alert-danger fade show w-100"
            role="alert"
          >
            <b>Incorrect Password.</b> <br /> Please try Again
          </div>
        ) : (
          <> </>
        )}

        <form
          className="signup-signin-form mx-auto"
          method="post"
          encType="application/x-www-form-urlencoded"
          onSubmit={onSubmitOwnerLogin}
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
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
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
              placeholder="must have at least 6 characters"
              required
              value={ownerPassword}
              onChange={(e) => setOwnerPassword(e.target.value)}
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
    </div>
  );
};

export default OwnerLogin;
