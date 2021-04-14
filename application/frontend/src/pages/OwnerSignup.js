import React, { useState } from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const OwnerSignup = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerContactNumber, setOwnerContactNumber] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPassword, setOwnerPassword] = useState('');
  const [ownerConfirmPassword, setOwnerConfirmPassword] = useState('');
  // const history = useHistory();

  const handleSubmitOwnerSignup1 = (event) => {
    // event.preventDefault();
    let form_data = new FormData();
    form_data.append('ownerName', ownerName);
    form_data.append('ownerContactNumber', ownerContactNumber);
    form_data.append('ownerEmail', ownerEmail);
    form_data.append('ownerPassword', ownerPassword);
    form_data.append('ownerConfirmPassword', ownerConfirmPassword);
    console.log(form_data);
    // setOwnerName('');
    // setOwnerContactNumber('');
    // setOwnerEmail('');
    // setOwnerPassword('');
    // setOwnerConfirmPassword('');
    // history.push('/OwnerSignup2');
    // axios
    //   .post('https://localhost:3001/api/restaurant/', form_data, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    //   .then((res) => {
    //     if (res.data.response.length > 0) {
    //       setOwnerName('');
    //       setOwnerContactNumber('');
    //       setOwnerEmail('');
    //       setOwnerPassword('');
    //       setOwnerConfirmPassword('');
    //     }
    //   })
    //   .then(() => {
    //     history.push('/OwnerSignup2');
    //   });
  };

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
            onChange={(e) => setOwnerName(e.target.value)}
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
            onChange={(e) => setOwnerContactNumber(e.target.value)}
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
            onChange={(e) => setOwnerEmail(e.target.value)}
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
            onChange={(e) => setOwnerPassword(e.target.value)}
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
            onChange={(e) => setOwnerConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          <a href="/">Forgot Password?</a> <br />
          <Link to="/OwnerLogin">Already Registered?</Link> <br />
          <br />
          {/* <Link to="/OwnerSignup2" className="btn-owner-signup"> */}
          <button
            type="submit"
            className="login_button w-75 d-flex  justify-content-center"
            value="Register"
            onClick={handleSubmitOwnerSignup1}
          >
            Proceed to Sign Up
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default OwnerSignup;
