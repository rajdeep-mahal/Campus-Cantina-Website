import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const DriverSignup = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form id="registration" className="registration-form" method="POST" action="/users/register">
        <input id="redirect-input" type="hidden" name="redirect"/>
        <h1  className="mb-3 font-weight-light text-center">Register Driver Account</h1>

        <login_label htmlFor="Drivername"> Driver Name </login_label>
          <input
              id="Drivername"
              className="login_input-field"
              type="text"
              placeholder="e.g. Jane Doe"
              required
              name="Driver Name"
            />
            <br/>

          <login_label htmlFor="chooseRestaurant" id="chooseRestaurant">Choose a Restaurant </login_label>
            <select className="m-2 text-muted driver-restaurant-list rounded">
              <option value="" selected> Select Restaurant...</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="Pizza">Pizza</option>
              <option value="Vietnamese">Vietnamese</option>
            </select>
        <br/>

          <login_label htmlFor="DriverContactNumber">Driver Contact Number </login_label>
            <input
              id="DriverContactNumber"
              className="login_input-field"
              type="text"
              placeholder="e.g. 415-999-9999"
              required
              name="Driver Contact Number"
            />
          <br/>

          <login_label htmlFor="DriverEmail"> Driver Email </login_label>
          <input
            className="login_input-field"
            id="DriverEmail"
            type="email"
            placeholder="e.g. jane.doe@gmail.com"
            required
            name="email"
          />  <br/>

          <login_label htmlFor="password">Password </login_label>
            <input
              className="login_input-field"
              id="password"
              type="password"
              placeholder="must have atleast 6 characters"
              required
              name="Password"
            />
          <br/>

          <login_label htmlFor="PassConfirmation">Confirm Password </login_label>
            <input
              className="login_input-field"
              id="PassConfirmation"
              type="password"
              placeholder="must have atleast 6 characters"
              required
              name="cpassword"
            />

        <br/><br/>
        <a href="/">Forgot Password?</a> <br/>
        <Link to="/DriverLogin">Have an account?</Link> <br/><br/>
        <button type="submit" className="login_button d-flex align-items-center justify-content-center" value="Register">Sign up</button>
      </form>
    </div>
  );
};

export default DriverSignup;
