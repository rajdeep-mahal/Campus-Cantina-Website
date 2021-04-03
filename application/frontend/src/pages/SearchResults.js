import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';     // For Google Maps
// import config from '../config';                                                // For Google Maps
import '../assets/css/vphome.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const searchResults = useSelector(
    (state) => state.searchReducer.searchResults
  );
  const noResult = useSelector((state) => state.searchReducer.noResult);
  const searchedTerm = useSelector((state) => state.searchReducer.searchedTerm);
  const searchedCuisine = useSelector(
    (state) => state.searchReducer.searchedCuisine
  );
  let allCuisines = '';

  if (searchedCuisine === '') {
    allCuisines = 'All Cuisines';
  }

  // For Google Maps
  // const { loadError } = useLoadScript({
  //   googleMapsApiKey: config.googleAPI,
  // });

  return (
    <div className="d-flex justify-content-center">
      {/* Search Results */}
      <div className="">
        {searchedTerm ? (
          <div>
            <h4 className="pt-3 text-center" style={{ fontWeight: '800' }}>
              Results for "{searchedTerm}"
            </h4>
            {searchResults.length === 1 ? (
              <p className="text-center  pr-2 primary-color">1 STORE NEARBY</p>
            ) : (
              <p className="text-center  pr-2 primary-color">
                {searchResults.length} STORES NEARBY
              </p>
            )}
          </div>
        ) : (
          <div>
            {allCuisines ? (
              <>
                <h4 className="pt-3 text-center" style={{ fontWeight: '800' }}>
                  Results for "{allCuisines}"
                </h4>
                <p className="text-center  pr-2 primary-color">
                  {searchResults.length} STORES NEARBY
                </p>
              </>
            ) : (
              <>
                <h4 className="pt-3 text-center" style={{ fontWeight: '800' }}>
                  Results for "{searchedCuisine}"
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
              </>
            )}
          </div>
        )}
        {searchResults.map((item, i) => (
          <div key={i}>
            <div className="card vp-card vp-shadow p-1 mb-4">
              <div className="d-flex">
                <img
                  className=""
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Small_Pic).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
                <img
                  className="d-none d-sm-none d-md-block"
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Large_Pic).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
                {/* Google Maps removed for now */}
                {/* <GoogleMap
                        mapContainerStyle={{ height: '250px', width: '400px' }}
                        zoom={17}
                        center={{ lat: item.Lat, lng: item.Lng }}
                        options={{
                          streetViewControl: false,
                          mapTypeControl: false,
                        }}
                      >
                        <Marker position={{ lat: item.Lat, lng: item.Lng }} />
                      </GoogleMap> 
                      {loadError && (
                        <p>Map cannot be displayed at this time.</p>
                      )}
                      */}
              </div>
              <h5 className="text-align-left pt-1">
                <strong>{item.Name}</strong>
                <small className="float-right pr-1 pt-1 primary-color">
                  Free Delivery
                </small>
                <br />
              </h5>
              <div>
                <p className="text-muted p-0 ">
                  {item.Price_Level} • {item.Cuisine}, {item.Tags}
                  {/* <p className="float-right pr-1">Free Delivery</p> */}
                </p>
              </div>
            </div>
          </div>
        ))}
        <h6 className="text-center">
          <br />
          {noResult}
        </h6>
        {noResult && (
          <div>
            <br />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5 className="text-center">
                <i class="fas fa-chevron-left h6 "></i> Back
              </h5>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
