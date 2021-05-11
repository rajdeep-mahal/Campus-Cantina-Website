import React, {useState} from 'react';
import '../assets/css/login_Signup.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 3);

const DriverSignup = () => {
  const restaurantsList = useSelector(
      (state) => state.searchReducer.allRestaurants
  );

  const [driverName, setDriverName] = useState('');
  const [driverContactNumber, setDriverContactNumber] = useState('');
  const [driverEmail, setDriverEmail] = useState('');
  const [driverPassword, setDriverPassword] = useState('');
  const [driverRestaurant, setDriverRestaurant] = useState('');

  const onSubmitDriverSignup = (event) => {
    event.preventDefault();

    let newDriverID = nanoid();
    axios
        .post('http://localhost:3001/api/driver/driver-signup', {
          driverID: newDriverID ,
          driverName: driverName,
          driverPhone: driverContactNumber,
          driverEmail: driverEmail,
          driverPassword: driverPassword,
          driverRestaurant: driverRestaurant,
        })
        .then((res) => {
          console.log(res);
        });
  };


  return (
      <div className="login-container d-flex align-items-center justify-content-center">
        <form
            id="registration"
            className="signup-signin-form"
            method="POST"
            onSubmit={onSubmitDriverSignup}
        >
          <div className="m-3">
            <input id="redirect-input" type="hidden" name="redirect" />
            <h2 className="font-weight-bold primary-color text-center">
              Driver Sign Up
            </h2>
            <p className="mt-3 text-info text-center">All fields are Mandatory</p>
            <label htmlFor="Drivername" className="login-label  first-label">
              Driver Name
            </label>
            <input
                id="Drivername"
                className="login_input-field"
                type="text"
                placeholder="e.g. Jane Doe"
                required
                name="Driver Name"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
            />
            <br />
            <label
                htmlFor="chooseRestaurant"
                id="chooseRestaurant"
                className="login-label"
            >
              Choose a Restaurant to work for
            </label>
            <select
                className="text-muted login_input-field"
                defaultValue={'Select Restaurant...'}
                value={driverRestaurant}
                onChange={(e) => setDriverRestaurant(e.target.value)}
            >
              <option value="Select Restaurant..." disabled>
                Select a Restaurant...
              </option>
              {restaurantsList.map((restaurant, i) => (
                  <option value={restaurant.Name} key={i}>
                    {restaurant.Name}
                  </option>
              ))}
            </select>
            <br />
            <label htmlFor="DriverContactNumber" className="login-label">
              Driver Contact Number
            </label>
            <input
                id="DriverContactNumber"
                className="login_input-field"
                type="text"
                placeholder="e.g. 415-999-9999"
                required
                name="Driver Contact Number"
                value={driverContactNumber}
                onChange={(e) => setDriverContactNumber(e.target.value)}
            />
            <br />
            <label htmlFor="DriverEmail" className="login-label">
              {' '}
              Driver Email{' '}
            </label>
            <input
                className="login_input-field"
                id="DriverEmail"
                type="email"
                placeholder="e.g. jane.doe@gmail.com"
                required
                name="email"
                value={driverEmail}
                onChange={(e) => setDriverEmail(e.target.value)}
            />{' '}
            <br />
            <label htmlFor="password" className="login-label">
              Password{' '}
            </label>
            <input
                className="login_input-field"
                id="password"
                type="password"
                placeholder="must have atleast 6 characters"
                required
                name="Password"
                value={driverPassword}
                onChange={(e) => setDriverPassword(e.target.value)}
            />
            <br />
            <label htmlFor="PassConfirmation" className="login-label">
              Confirm Password{' '}
            </label>
            <input
                className="login_input-field"
                id="PassConfirmation"
                type="password"
                placeholder="must have atleast 6 characters"
                required
                name="cpassword"
            />
            <div className="form-check mt-4 ml-1">
              <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  required
              />
              <label htmlFor="defaultCheck1 Warning" className="form-check-label">
                I Agree to the <u>Terms & Conditions</u>
              </label>
            </div>
            <br />
            <a href="/">Forgot Password?</a> <br />
            <Link to="/DriverLogin">Already Registered?</Link> <br />
            <br />
            <button
                type="submit"
                className="login_button d-flex align-items-center justify-content-center"
                value="Register"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
  );
};

export default DriverSignup;
