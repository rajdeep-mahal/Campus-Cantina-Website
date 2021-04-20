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
        <div className=" container d-flex justify-content-around flex-wrap mt-4">
          {searchResults.map((item, i) => (
            // Google Maps removed for now
            // <GoogleMap
            //       mapContainerStyle={{ height: '250px', width: '400px' }}
            //       zoom={17}
            //       center={{ lat: item.Lat, lng: item.Lng }}
            //       options={{
            //         streetViewControl: false,
            //         mapTypeControl: false,
            //       }}
            //     >
            //       <Marker position={{ lat: item.Lat, lng: item.Lng }} />
            // </GoogleMap>
            //     {loadError && (
            //       <p>Map cannot be displayed at this time.</p>
            //     )}
            <div key={i}>
              <div className="card home-restaurant-card ml-2">
                <img
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Display_Pic_Thumbnail).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
                {/**  Original change from Bhavani
                *Merged a change from pw-encrypt unsure which to keep */}
                 <div className="row">
                   <div className="col">
                     <h5 className="text-align-left ml-2">
                       <strong>{item.Name}</strong>
                     </h5>
                   </div>
                   <div className="col">
                     <p className="float-right mr-2">Free Delivery</p>
                   </div>
                 </div>
                 <div className="restaurants-price-tags">
                   <span className="text-muted ml-2">
                     {item.Price_Level} • {item.Cuisine}, <br />
                     <span className="text-muted ml-2">{item.Tags}</span>
                   </span>
                 </div> 
              </div>
            </div>
          ))}
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
