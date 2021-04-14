import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';
import {
  setOwnerName,
  setOwnerContactNumber,
  setOwnerEmail,
  setOwnerPassword,
  setOwnerConfirmPassword,
} from '../redux/actions/ownerSignupActions';

const OwnerSignup = () => {
  const dispatch = useDispatch();
  const ownerName = useSelector((state) => state.ownerSignupReducer.ownerName);
  const ownerContactNumber = useSelector(
    (state) => state.ownerSignupReducer.ownerContactNumber
  );
  const ownerEmail = useSelector(
    (state) => state.ownerSignupReducer.ownerEmail
  );
  const ownerPassword = useSelector(
    (state) => state.ownerSignupReducer.ownerPassword
  );
  const ownerConfirmPassword = useSelector(
    (state) => state.ownerSignupReducer.ownerConfirmPassword
  );
  const history = useHistory();
  const onSubmitOwnerSignup1 = async (event) => {
    event.preventDefault();
    if (ownerPassword !== ownerConfirmPassword) alert('Passwords do not match');
    else history.push('/ownersignup2');
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        id="registration"
        className="signup-signin-form"
        method="POST"
        action="/users/register"
        onSubmit={onSubmitOwnerSignup1}
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="mb-3 font-weight-bold primary-color text-center">
            Restaurant Owner <br />
            Sign Up
          </h2>
          <label htmlFor="ownerName" className="login-label">
            Owner Name
          </label>
          <input
            id="name"
            className="login_input-field"
            type="text"
            placeholder="e.g. John Doe"
            required
            name="Restaurant Owner Name"
            value={ownerName}
            onChange={(e) => dispatch(setOwnerName(e.target.value))}
          />
          <label htmlFor="ownerContactNumber" className="login-label">
            Owner Contact Number
          </label>
          <input
            id="ownerContactNumber"
            className="login_input-field"
            type="text"
            placeholder="e.g. 415-999-9999"
            required
            name="Restaurant Owner Contact Number"
            value={ownerContactNumber}
            onChange={(e) => dispatch(setOwnerContactNumber(e.target.value))}
          />
          <label htmlFor="ownerEmail" className="login-label">
            Owner Email
          </label>
          <input
            className="login_input-field"
            id="ownerEmail"
            type="email"
            placeholder="e.g. john.doe@gmail.com"
            required
            name="ownerEmail"
            value={ownerEmail}
            onChange={(e) => dispatch(setOwnerEmail(e.target.value))}
          />
          <label htmlFor="ownerPassword" className="login-label">
            Password
          </label>
          <input
            className="login_input-field"
            id="password"
            type="password"
            placeholder="must have atleast 6 characters"
            required
            name="Password"
            value={ownerPassword}
            onChange={(e) => dispatch(setOwnerPassword(e.target.value))}
          />
          <label htmlFor="PassConfirmation" className="login-label">
            Confirm Password
          </label>
          <input
            className="login_input-field"
            id="PassConfirmation"
            type="password"
            placeholder="must have atleast 6 characters"
            required
            name="cpassword"
            value={ownerConfirmPassword}
            onChange={(e) => dispatch(setOwnerConfirmPassword(e.target.value))}
          />
          <br />
          <br />
          <a href="/">Forgot Password?</a> <br />
          <Link to="/OwnerLogin">Already Registered?</Link> <br />
          <br />
          <button
            type="submit"
            className="login_button w-75 d-flex  justify-content-center"
            value="Register"
          >
            Proceed to Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default OwnerSignup;
