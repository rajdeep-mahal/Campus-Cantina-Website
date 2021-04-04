import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const DriverSignup = () => {
  return (
    <div>
      <form
        id="registration"
        className="registration"
        method="POST"
        action="/users/register"
      >
        <input
          className="login_input-field"
          id="redirect-input"
          type="hidden"
          name="redirect"
        />
        <fieldset className="login_fieldset-form2">
          <legend className="login_page-title text-center">
            Register Driver account
          </legend>
          <login_label htmlFor="Drivername">
            Driver Name
            <input
              id="Drivername"
              className="login_input-field"
              type="text"
              placeholder="e.g. Jane Doe"
              required
              name="Driver Name"
            />
          </login_label>

          <login_label htmlFor="chooseRestaurant" id="chooseRestaurant">
            Choose a Restaurant
            <select className="m-2 text-muted driver-restaurant-list rounded">
              <option value="" selected>
                Select Restaurant...
              </option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="Pizza">Pizza</option>
              <option value="Vietnamese">Vietnamese</option>
            </select>
          </login_label>

          <login_label htmlFor="DriverContactNumber">
            Driver Contact Number
            <input
              id="DriverContactNumber"
              className="login_input-field"
              type="text"
              placeholder="e.g. 415-999-9999"
              required
              name="Driver Contact Number"
            />
          </login_label>

          <login_label htmlFor="DriverEmail"> Driver Email </login_label>
          <input
            className="login_input-field"
            id="DriverEmail"
            type="email"
            placeholder="e.g. jane.doe@gmail.com"
            required
            name="email"
          />

          <login_label htmlFor="password">
            Password
            <input
              className="login_input-field"
              id="password"
              type="password"
              placeholder="must have atleast 6 characters"
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
              placeholder="must have atleast 6 characters"
              required
              name="cpassword"
            />
          </login_label>
          <br />
          <Link to="/DriverLogin">Have an account?</Link>
          <br />
          <button type="submit" className="login_button" value="Register">
            Sign up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default DriverSignup;
