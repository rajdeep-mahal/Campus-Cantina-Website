/*
Summary of Home.js: 
 - renders with '/' in React Application
 - Components: Banner Carousel, Cuisine Row, All Restaurants
*/
import React from 'react';
import '../assets/css/home.css';
import { useSelector } from 'react-redux';
import CuisineRow from '../components/CuisineRow';
// import ButtonsRow from '../components/ButtonsRow';
import Banner1 from '../assets/img/Home_Banner1.jpg';
import driverBanner from '../assets/img/Driver_Home_Banner.png';
import ownerBanner from '../assets/img/Owner_Home_Banner.png';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api'; // For Google Maps
import config from '../config'; // For Google Maps

const Home = () => {
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );

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
    <div>
      {/* Marketing Banner */}
      <div className="carousel">
        <div className="carousel-item active">
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <div className="carousel-caption banner1-caption d-none d-lg-block">
            <div className="container">
              <div className="row justify-content-start text-center">
                <div className="col-lg-9">
                  <a href="/SFSULogin" role="button">
                    <button className="btn carousel-btn ml-5">Log In</button>
                  </a>
                  <a href="/SFSUSignup">
                    <button className="btn carousel-btn ml-3">Sign Up</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Cuisines Row */}
      <div>
        <CuisineRow />
      </div>
      <br />
      <div className="container mt-3">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="marketing-owner-driver">
            <img
              height="350"
              width="380"
              src={ownerBanner}
              alt="Owner Banner"
            />
            <div className="d-flex flex-wrap justify-content-center mb-2">
              <a href="/ownerlogin" role="button">
                <button className="btn carousel-btn">Log In</button>
              </a>
              <a href="/ownersignup">
                <button className="btn carousel-btn ml-3">Sign Up</button>
              </a>
            </div>
          </div>
          <div className="marketing-owner-driver">
            <img
              height="350"
              width="380"
              src={driverBanner}
              alt="Driver Banner"
            />
            <div className="d-flex flex-wrap justify-content-center mb-2">
              <a href="/driverlogin" role="button">
                <button className="btn carousel-btn">Log In</button>
              </a>
              <a href="/driversignup">
                <button className="btn carousel-btn ml-3">Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* All Restaurants */}
      <div className="container">
        <h2 className="home-restaurants-heading">Restaurants</h2>
        <div className="d-flex justify-content-around flex-wrap mt-4">
          {restaurantsList.map((item, i) => (
            <div key={i}>
              <div className="card home-restaurant-card">
                <img
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Display_Pic_Thumbnail).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
                <div className="row">
                  <div className="col">
                    <h5 className="text-align-left ml-2 mt-1">
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
                    <br />
                    <span className="text-muted ml-2">{item.Address}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
