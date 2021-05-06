/*
Summary of SearchResults.js: 
 - Renders on '/searchresults'
 - to load when clicked on search on the top nav searchbar (with or without search parameter)
 - Components: dynamic search with Redux Search Reducer
 - Restaurant results displayed on the page
*/
import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api'; // For Google Maps
import config from '../config'; // For Google Maps
import '../assets/css/vphome.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AllRestaurants from '../components/AllRestaurants';

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

  //Google Map
  const center = {
    lat: 37.7234,
    lng: -122.481,
  };

  function MyMap() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: config.googleAPI,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
      setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null);
    }, []);

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ height: '200px', width: '300px' }}
        zoom={17}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <Marker position={{ lat: 37.7234, lng: -122.481 }} />
      </GoogleMap>
    ) : (
      <></>
    );
  } //end of MyMap function

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
        <div className="container">
          <AllRestaurants results={searchResults} />
        </div>
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
