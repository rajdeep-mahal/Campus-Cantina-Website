import React from 'react';
import '../assets/css/login_Signup.css';
import { Link } from 'react-router-dom';

const OwnerSignupExtended = () => {
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
              value="option1"
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
              value="option2"
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
              value="option3"
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
              //   value={image}
              className="form-control"
              //   ref={ref}
              //   onChange={(e) => dispatch(setImage(e.target.files[0]))}
              single="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="BannerImage">Upload Two Menu Item Images </label>
            <input
              id="input-image2"
              type="file"
              name="menuImageUpload1"
              accept=".jpg, .png, .jpeg"
              //   value={image}
              className="form-control"
              //   ref={ref}
              //   onChange={(e) => dispatch(setImage(e.target.files[0]))}
              single="true"
            />
            <input
              id="input-image3"
              type="file"
              name="bmenuImageUpload2"
              accept=".jpg, .png, .jpeg"
              //   value={image}
              className="form-control mt-2"
              //   ref={ref}
              //   onChange={(e) => dispatch(setImage(e.target.files[0]))}
              single="true"
            />
          </div>
          <br />
          <br />
          <Link to="/OwnerSignup">
            <i className="fas fa-chevron-left small"></i> Back
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
