import React, { useState } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OwnerSignupExtended = () => {
  const history = useHistory();
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
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantContactNumber, setRestaurantContactNumber] = useState('');
  const [restaurantCuisine, setRestaurantCuisine] = useState('');
  const [restaurantTags, setRestaurantTags] = useState('');
  const [restaurantPriceLevel, setRestaurantPriceLevel] = useState('');
  const [restaurantBanner, setRestaurantBanner] = useState('');
  const [restaurantMenuItem1, setRestaurantMenuItem1] = useState('');
  const [restaurantMenuItem2, setRestaurantMenuItem2] = useState('');

  const onSubmitOwnerSignup2 = (event) => {
    event.preventDefault();
    const form_data = new FormData();
    form_data.append('ownerName', ownerName);
    form_data.append('ownerContactNumber', ownerContactNumber);
    form_data.append('ownerEmail', ownerEmail);
    form_data.append('ownerPassword', ownerPassword);
    form_data.append('ownerConfirmPassword', ownerConfirmPassword);
    form_data.append('restaurantName', restaurantName);
    form_data.append('restaurantAddress', restaurantAddress);
    form_data.append('restaurantContactNumber', restaurantContactNumber);
    form_data.append('restaurantCuisine', restaurantCuisine);
    form_data.append('restaurantTags', restaurantTags);
    form_data.append('restaurantPriceLevel', restaurantPriceLevel);
    form_data.append('restaurantBanner', restaurantBanner);
    form_data.append('restaurantMenuItem1', restaurantMenuItem1);
    form_data.append('restaurantMenuItem2', restaurantMenuItem2);

    alert('Thank you for Registering');
    history.push('/');
    // axios
    //   .post('http://localhost:3001/api/owner/register', form_data, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    //   .then((res) => {
    //     if (res.data.response.length > 0) {
    // history.push('/');
    //     }
    //   });
  };

  return (
    <div
      className="login-container d-flex align-items-center justify-content-center"
      onSubmit={onSubmitOwnerSignup2}
    >
      <form
        id="registration"
        className="signup-signin-form"
        method="POST"
        action="/users/register"
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="mb-3 font-weight-bold primary-color text-center">
            Restaurant Sign Up
          </h2>
          <label htmlFor="name" className="login-label">
            Restaurant Name
          </label>
          <input
            id="name"
            className="login_input-field"
            type="text"
            placeholder="e.g. Chipotoplay"
            required
            name="Restaurant Name"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <label htmlFor="address" className="login-label">
            Restaurant Address
          </label>
          <input
            id="address"
            className="login_input-field"
            type="text"
            placeholder="e.g. 2090 Chestnut St, San Francisco, CA"
            required
            name="Restaurant Address"
            value={restaurantAddress}
            onChange={(e) => setRestaurantAddress(e.target.value)}
          />
          <label htmlFor="contactNumber" className="login-label">
            Restaurant Contact Number
          </label>
          <input
            id="contactNumber"
            className="login_input-field"
            type="text"
            placeholder="e.g. 415-999-9999"
            required
            name="Restaurant Contact Number"
            value={restaurantContactNumber}
            onChange={(e) => setRestaurantContactNumber(e.target.value)}
          />
          <label htmlFor="Cuisine" className="login-label">
            Restaurant Cuisine
          </label>
          <input
            id="cuisine"
            className="login_input-field"
            type="text"
            placeholder="e.g. Mexican"
            required
            name="Restaurant Cuisine"
            value={restaurantCuisine}
            onChange={(e) => setRestaurantCuisine(e.target.value)}
          />
          <label htmlFor="Search Tags" className="login-label">
            Search Tags
          </label>
          <input
            id="tags"
            className="login_input-field"
            type="text"
            placeholder="e.g. taco, burrito"
            required
            name="Restaurant Search Tags"
            value={restaurantTags}
            onChange={(e) => setRestaurantTags(e.target.value)}
          />
          <label htmlFor="Price Level" className="login-label">
            Price Level
          </label>
          <br />
          <div className="form-check form-check-inline ml-1">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="$"
              // checked={setRestaurantPriceLevel('$')}
              onChange={(e) => setRestaurantPriceLevel(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              $
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="$$"
              // checked={setRestaurantPriceLevel('$$')}
              onChange={(e) => setRestaurantPriceLevel(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              $$
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="$$$"
              // checked={setRestaurantPriceLevel('$$$')}
              onChange={(e) => setRestaurantPriceLevel(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              $$$
            </label>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="BannerImage">Upload a Banner Image: </label>
            <input
              id="input-image1"
              type="file"
              name="bannerImageUpload"
              accept=".jpg, .png, .jpeg"
              // value={restaurantBanner}
              className="form-control"
              //   ref={ref}
              onChange={(e) => setRestaurantBanner(e.target.files[0])}
              single="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="MenuItemImages">Upload Menu Item Images:</label>
            <input
              id="input-image2"
              type="file"
              name="menuImageUpload1"
              accept=".jpg, .png, .jpeg"
              // value={restaurantMenuItem1}
              className="form-control"
              //   ref={ref}
              onChange={(e) => setRestaurantMenuItem1(e.target.files[0])}
              single="true"
            />
            <input
              id="input-image3"
              type="file"
              name="menuImageUpload2"
              accept=".jpg, .png, .jpeg"
              // value={restaurantMenuItem2}
              className="form-control mt-2"
              //   ref={ref}
              onChange={(e) => setRestaurantMenuItem2(e.target.files[0])}
              single="true"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              required
            />
            <label
              htmlFor="defaultCheck1 Warning"
              className="small form-check-label"
            >
              On Signing up, your restaurant will be sent for approval to the
              admin. It shall be live only after approval.
            </label>
          </div>
          <Link to="/OwnerSignup">
            <i className="fas fa-chevron-left small mt-3"></i> Back
          </Link>
          <br />
          <Link to="/OwnerLogin">Already Registered?</Link> <br />
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

export default OwnerSignupExtended;
