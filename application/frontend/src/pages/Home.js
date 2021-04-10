import React from 'react';
import '../assets/css/home.css';
import { useSelector } from 'react-redux';
import CuisineRow from '../components/CuisineRow';
import ButtonsRow from '../components/ButtonsRow';

const Home = () => {
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );

  return (
    <div className="home mt-3">
      {/* Marketing Banner */}
      <div
        className="mx-auto"
        style={{ width: '98vw', height: '150px', border: 'solid 1px grey' }}
      >
        <h3 className="text-center">Marketing Banner</h3>
      </div>
      <br />

      {/* Cuisines Row */}
      <div className="mx-auto" style={{ width: '98vw' }}>
        <CuisineRow />
      </div>
      <br />

      {/* Buttons Row - Optional */}
      <div className="mx-auto" style={{ width: '98vw' }}>
        <ButtonsRow />
      </div>
      <br />

      {/* Local Favorites */}
      <div
        className="mx-auto"
        style={{ width: '98vw', height: '320px', border: 'solid 1px grey' }}
      >
        <h3>Local Favorites</h3>
        <div style={{ display: 'flex' }}>
          {restaurantsList.map((item, i) => (
            <div key={i}>
              {/* Only display restaurants with 'Local' attribute set to 1/true */}
              {item.Local === 1 && (
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
      <br />

      {/* Featured Restuarant */}
      <div
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
              <div key={i}>
                {/* Only display featured restaurant */}
                {i === 8 && (
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
      </div>
      <br />

      {/* Black-Owned Businesses */}
      <div
        className="mx-auto"
        style={{ width: '98vw', height: '320px', border: 'solid 1px grey' }}
      >
        <h3>Black-Owned Businesses</h3>
        <div style={{ display: 'flex' }}>
          {restaurantsList.map((item, i) => (
            <div key={i}>
              {/* Only display restaurants with 'Black_Owned' attribute set to 1/true */}
              {item.Black_Owned === 1 && (
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
      <br />

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
