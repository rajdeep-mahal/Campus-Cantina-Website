import React from 'react';
import '../assets/css/login_Signup.css';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const DriverSignup = () => {
  const [restaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/api/restaurant/all-restaurants')
      .then((res) => {
        setRestaurants(res.data);
      });
  }, []);

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        id="registration"
        className="registration-form"
        method="POST"
        action="/users/register"
      >
        <input id="redirect-input" type="hidden" name="redirect" />
        <h1 className="mb-3 font-weight-light text-center">
          Register Driver Account
        </h1>
        <label htmlFor="Drivername" className="login-label">
          Driver Name
        </label>
        <input
          id="Drivername"
          className="login_input-field"
          type="text"
          placeholder="e.g. Jane Doe"
          required
          name="Driver Name"
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
          id="restaurantsList"
          className="text-muted driver-restaurant-list rounded"
          defaultValue={'Select Restaurant...'}
        >
          <option value="Select Restaurant..." disabled>
            Select a Restaurant...
          </option>
          {restaurants.map((restaurant, i) => (
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
        <br />
        <br />
        <a href="/">Forgot Password?</a> <br />
        <Link to="/DriverLogin">Have an account?</Link> <br />
        <br />
        <button
          type="submit"
          className="login_button d-flex align-items-center justify-content-center"
          value="Register"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default DriverSignup;
