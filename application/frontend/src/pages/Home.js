import React from 'react';
import '../assets/css/home.css';
import { useSelector } from 'react-redux';
import CuisineRow from '../components/CuisineRow';
// import ButtonsRow from '../components/ButtonsRow';
import Banner1 from '../assets/img/Home_Banner1.jpg';
import Banner2 from '../assets/img/Home_Banner2.jpg';
import Banner3 from '../assets/img/Home_Banner3.jpg';
import Banner4 from '../assets/img/Home_Banner4.jpg';

// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import config from '../config.js';

const Home = () => {
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  // const { loadError } = useLoadScript({
  //   googleMapsApiKey: config.googleAPI,
  // });

  return (
    <div>
      {/* Marketing Banner */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
        data-pause="hover"
        // data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
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
          <div className="carousel-item">
            <img className="d-block w-100" src={Banner2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <div className="container">
                <div className="row justify-content-start text-center">
                  <div className="col-lg-9">
                    {/* Google Maps
                    {loadError ? (
                      <p>Map cannot be displayed at this time.</p>
                    ) : (
                      <GoogleMap
                        mapContainerStyle={{ height: '250px', width: '400px' }}
                        zoom={15}
                        center={{
                          lat: 37.72445470045727,
                          lng: -122.47972592328226,
                        }}
                        options={{
                          streetViewControl: false,
                          mapTypeControl: false,
                        }}
                      >
                        <Marker
                          position={{
                            lat: 37.72445470045727,
                            lng: -122.47972592328226,
                          }}
                        />
                      </GoogleMap>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Banner3} alt="Third slide" />
            <div className="carousel-caption banner3-caption d-none d-lg-block">
              <div className="container">
                <div className="row justify-content-start text-center">
                  <div className="col-lg-9">
                    <a href="/ownerlogin" role="button">
                      <button className="btn carousel-btn ml-5">Log In</button>
                    </a>
                    <a href="/ownersignup">
                      <button className="btn carousel-btn ml-3">Sign Up</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Banner4} alt="Fourth slide" />
            <div className="carousel-caption banner4-caption d-none d-md-block">
              <div className="container">
                <div className="row justify-content-start text-center">
                  <div className="col-lg-9">
                    <a href="/driverlogin" role="button">
                      <button className="btn carousel-btn ml-5">Log In</button>
                    </a>
                    <a href="/driversignup">
                      <button className="btn carousel-btn ml-3">Sign Up</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      {/* Cuisines Row */}
      <div className="">
        <CuisineRow />
      </div>
      <br />
      {/* Buttons Row - Optional */}
      {/* <div className="mx-auto" style={{ width: '98vw' }}>
        <ButtonsRow />
      </div>
      <br /> */}
      {/* Local Favorites */}
      {/* <div
        className="mx-auto"
        style={{ width: '98vw', height: '320px', border: 'solid 1px grey' }}
      >
        <h3>Local Favorites</h3>
        <div style={{ display: 'flex' }}>
          {restaurantsList.map((item, i) => (
            <div key={i}> */}
      {/* Only display restaurants with 'Local' attribute set to 1/true */}
      {/* {item.Local === 1 && (
                <div className="card vp-card vp-shadow p-1 mb-4">
                  <div className="d-flex">
                    <img
                      className=""
                      src={
                        'data:image/jpeg;base64,' +
                        new Buffer(item.Small_Pic).toString('base64')
                      }
                      alt=""
                      width="300px"
                      height="200px"
                    />
                  </div>
                  <h5 className="text-align-left pt-2 pl-1">
                    <strong>{item.Name}</strong>
                    <br />
                  </h5>
                  <div style={{ marginBottom: '-5px' }}>
                    <span className="text-muted p-0 pl-1 ">
                      {item.Price_Level} • {item.Cuisine}, {item.Tags}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <br /> */}
      {/* Featured Restuarant */}
      {/* <div
        className="mx-auto"
        style={{ width: '98vw', height: '400px', border: 'solid 1px grey' }}
      >
        <h3>Featured</h3>
        <div className="row">
          <div className="col-md-4">
            <p>
              Marketing text Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            {restaurantsList.map((item, i) => (
              <div key={i}> */}
      {/* Only display featured restaurant */}
      {/* {i === 8 && (
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
                    </div>
                    <h5 className="text-align-left pt-2 pl-1">
                      <strong>{item.Name}</strong>
                      <br />
                    </h5>
                    <div style={{ marginBottom: '-5px' }}>
                      <span className="text-muted p-0 pl-1 ">
                        {item.Price_Level} • {item.Cuisine}, {item.Tags}
                        <p className="float-right pr-1 rest-desc-text">
                          Free Delivery
                        </p>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <br />

      {/* Black-Owned Businesses */}
      {/* <div
        className="mx-auto"
        style={{ width: '98vw', height: '320px', border: 'solid 1px grey' }}
      >
        <h3>Black-Owned Businesses</h3>
        <div style={{ display: 'flex' }}>
          {restaurantsList.map((item, i) => (
            <div key={i}> */}
      {/* Only display restaurants with 'Black_Owned' attribute set to 1/true */}
      {/* {item.Black_Owned === 1 && (
                <div className="card vp-card vp-shadow p-1 mb-4">
                  <div className="d-flex">
                    <img
                      className=""
                      src={
                        'data:image/jpeg;base64,' +
                        new Buffer(item.Small_Pic).toString('base64')
                      }
                      alt=""
                      width="300px"
                      height="200px"
                    />
                  </div>
                  <h5 className="text-align-left pt-2 pl-1">
                    <strong>{item.Name}</strong>
                    <br />
                  </h5>
                  <div style={{ marginBottom: '-5px' }}>
                    <span className="text-muted p-0 pl-1 ">
                      {item.Price_Level} • {item.Cuisine}, {item.Tags}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div> */}
      {/* </div> */}
      {/* <br /> */}
      {/* All Restaurants */}
      <h3 className="pl-2">All Restaurants</h3>
      <div className="d-flex justify-content-center">
        <div>
          {restaurantsList.map((item, i) => (
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
                </div>
                <h5 className="text-align-left pt-2 pl-1">
                  <strong>{item.Name}</strong>
                  <br />
                </h5>
                <div style={{ marginBottom: '-5px' }}>
                  <span className="text-muted p-0 pl-1 ">
                    {item.Price_Level} • {item.Cuisine}, {item.Tags}
                    <p className="float-right pr-1 rest-desc-text">
                      Free Delivery
                    </p>
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
