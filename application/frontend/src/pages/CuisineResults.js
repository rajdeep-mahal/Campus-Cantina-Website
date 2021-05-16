/*
Summary of CuisineResults.js: 
 - Renders on '/cuisineresults'
 - to load when clicked on cuisine icons on the home page
 - Components: dynamic search with Redux Search Reducer
 - Restaurant results displayed on the page based on Cuisine
*/
import React from 'react';
//  import '../assets/css/vphome.css';
import '../assets/css/home.css';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import CuisineRow from '../components/CuisineRow';
import AllRestaurants from '../components/AllRestaurants';

const CuisineResults = () => {
  const searchResults = useSelector(
    (state) => state.searchReducer.searchResults
  );
  const searchedCuisine = useSelector(
    (state) => state.searchReducer.searchedCuisine
  );
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);

  return (
    <>
      {appUser.type === 'guest' ||
      appUser.type === 'customer' ||
      appUser.type === undefined ? (
        <div className="d-flex justify-content-center">
          <div className="">
            <div>
              <h4 className="pt-3 text-center" style={{ fontWeight: '800' }}>
                {searchedCuisine}
              </h4>

              {searchResults.length === 1 ? (
                <p className="text-center  pr-2 primary-color">
                  1 STORE NEARBY
                </p>
              ) : (
                <p className="text-center  pr-2 primary-color">
                  {searchResults.length} STORES NEARBY
                </p>
              )}
            </div>

            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5 className="text-center">
                <i className="fas fa-chevron-left h6 "></i> Back
              </h5>
            </Link>
            <div style={{ width: '80vw' }}>
              <CuisineRow />
            </div>

            <br />
            <div className="container">
              <AllRestaurants results={searchResults} />
            </div>
          </div>
        </div>
      ) : appUser.type === 'owner' ? (
        <Redirect to="/owner/menu" />
      ) : appUser.type === 'driver' ? (
        <Redirect to="/driver/current-orders" />
      ) : (
        <> </>
      )}
    </>
  );
};

export default CuisineResults;
