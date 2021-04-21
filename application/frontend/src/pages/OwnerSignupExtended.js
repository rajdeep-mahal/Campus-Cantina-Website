import React, { useState, useEffect } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 3);

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
  const ownerFormSubmitted = useSelector(
    (state) => state.ownerSignupReducer.ownerFormSubmitted
  );

  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [cuisines, setCuisines] = useState([]);
  const [restaurantCuisine, setRestaurantCuisine] = useState('');
  const [restaurantTags, setRestaurantTags] = useState('');
  const [restaurantPriceLevel, setRestaurantPriceLevel] = useState('');
  const [restaurantBanner, setRestaurantBanner] = useState('');
  // const [restaurantMenuItem1, setRestaurantMenuItem1] = useState('');
  // const [restaurantMenuItem2, setRestaurantMenuItem2] = useState('');

  const onSubmitOwnerSignup2 = () => {
    //event.preventDefault();
    const form_data = new FormData();
    const form_data2 = new FormData();

    form_data2.append('ownerName', ownerName);
    form_data2.append('ownerContactNumber', ownerContactNumber);
    form_data2.append('ownerEmail', ownerEmail);
    form_data2.append('ownerPassword', ownerPassword);
    form_data2.append('ownerConfirmPassword', ownerConfirmPassword);
    form_data2.append('ownerRestaurant', restaurantName);

    form_data.append('restaurantName', restaurantName);
    form_data.append('restaurantAddress', restaurantAddress);
    form_data.append('restaurantCuisine', restaurantCuisine);
    form_data.append('restaurantTags', restaurantTags);
    form_data.append('restaurantPriceLevel', restaurantPriceLevel);
    form_data.append('restaurantBanner', restaurantBanner);
    // form_data.append('restaurantMenuItem1', restaurantMenuItem1);
    // form_data.append('restaurantMenuItem2', restaurantMenuItem2);

    let ID = nanoid();
    form_data.append('restaurantID', ID);

    let ID2 = nanoid();
    form_data2.append('ownerID', ID2);

    let dataObject = {};
    form_data.forEach((value, key) => (dataObject[key] = value));
    let dataJson = JSON.stringify(dataObject);

    let dataObject2 = {};
    form_data2.forEach((value, key) => (dataObject2[key] = value));
    let dataJson2 = JSON.stringify(dataObject2);

    axios
      .post('http://localhost:3001/api/restaurant/register-owner', {
        params: { formdata: dataJson2 },
      })
      .then((res) => {
        console.log(res);
      });

    axios
      .post('http://localhost:3001/api/restaurant/register-restaurant', {
        params: { formdata: dataJson },
      })
      .then((res) => {
        console.log(res);
      });

    alert('Thank you for Registering');
    history.push('/');
  };

  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get('http://localhost:3001/api/searchbar/cuisines', {
        cancelToken: source.token,
      })
      .then((res) => setCuisines(res.data))
      .catch((err) => err);
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      {ownerFormSubmitted ? (
        <div
          className="login-container d-flex align-items-center justify-content-center"
          onSubmit={onSubmitOwnerSignup2}
        >
          <form
            id="registration"
            className="signup-signin-form"
            method="POST"
            //action="/users/register"
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
                placeholder="e.g. 2090 Chestnut St"
                required
                name="Restaurant Address"
                value={restaurantAddress}
                onChange={(e) => setRestaurantAddress(e.target.value)}
              />
              <label htmlFor="Cuisine" className="login-label">
                Restaurant Cuisine
              </label>
              <select
                className="custom-select login_input-field"
                id="inlineFormCustomSelect"
                defaultValue={'Choose  a Cuisine...'}
                onChange={(e) => setRestaurantCuisine(e.target.value)}
              >
                <option value="Choose  a Cuisine..." disabled>
                  Choose a Cuisine...
                </option>
                {cuisines.map((cuisine, i) => (
                  <option value={cuisine.Cuisine} key={i}>
                    {cuisine.Cuisine}
                  </option>
                ))}
              </select>
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
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="$$$$"
                  // checked={setRestaurantPriceLevel('$$$$')}
                  onChange={(e) => setRestaurantPriceLevel(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio4">
                  $$$$
                </label>
              </div>
              <div className="form-group mt-1">
                <label htmlFor="BannerImage">Upload a Banner Image: </label>
                <input
                  id="banner_img"
                  type="file"
                  name="bannerImageUpload"
                  accept=".jpg, .png, .jpeg"
                  // value={restaurantBanner}
                  className="form-control login_input-field"
                  //   ref={ref}
                  onChange={(e) => setRestaurantBanner(e.target.files[0])}
                  single="true"
                />
              </div>
              {/* <div className="form-group">
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
              </div> */}
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
                  On Signing up, your restaurant will be sent for approval to
                  the admin. It shall be live only after approval.
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
      ) : (
        <Redirect to="/ownersignup" />
      )}
    </>
  );
};

export default OwnerSignupExtended;
