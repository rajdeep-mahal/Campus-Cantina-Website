import React from 'react';
import '../assets/css/restaurant_page.css';
import Banner from '../assets/img/restaurant/banner.jpg';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import config from '../config.js';
import Pizza1 from '../assets/img/restaurant/pizza1.jpg';
import Pizza2 from '../assets/img/restaurant/pizza2.jpg';
import Wings from '../assets/img/restaurant/wings.jpg';
import Bread from '../assets/img/restaurant/bread.jpg';

const RestaurantPage = () => {
  const { loadError } = useLoadScript({
    googleMapsApiKey: config.googleAPI,
  });

  return (
    <div>
      <div className="rp-banner">
        <img className="img-fluid" src={Banner} height="200px" />
      </div>
      <div className="ml-5 mr-5 mt-4 mb-4">
        <div
          className="float-right"
          style={{
            border: 'solid 1px lightgrey',
            width: '300px',
            height: '200px',
          }}
        >
          {/* Google Maps */}
          <GoogleMap
            mapContainerStyle={{ height: '200px', width: '300px' }}
            zoom={17}
            center={{ lat: 37.7234, lng: -122.481 }}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            <Marker position={{ lat: 37.7234, lng: -122.481 }} />
          </GoogleMap>
          {loadError && <p>Map cannot be displayed at this time.</p>}
        </div>
        <div className="pl-1">
          <h1>Sliceline</h1>
          <p className="text-muted ">
            $$ • Pizza, Wings, Pepporoni <br />
            0.3 mi
          </p>
        </div>
        <div className="rp-info">
          <table height="90px" className="mx-auto">
            <tbody>
              <tr>
                <td className="align-middle">
                  <p>
                    $1.99 <br /> delivery fee
                  </p>
                </td>
                <td className="align-middle p-3">
                  <p>
                    18-24 <br /> minutes
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="rp-menu-items m-4">
        <h4 className="ml-4 pb-3 pt-3">Most Popular</h4>
        <div className="row m-2">
          <div className="col-6" style={{ border: '', height: '200px' }}>
            <div className="card rp-item" style={{ height: '170px' }}>
              <table height="90px" className="">
                <tbody>
                  <tr>
                    <td className="pl-4 pt-4">
                      <p>
                        <strong>Cheese Pizza </strong>
                        <br />{' '}
                        <span className="text-muted">(700-1180 Cal.)</span>
                        <br />
                        <span>$11.99</span>
                      </p>
                    </td>
                    <td className="align-middle float-right">
                      <img src={Pizza1} height="165px" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6" style={{ border: '', height: '200px' }}>
          <div className="card rp-item" style={{ height: '170px' }}>
              <table height="90px" className="">
                <tbody>
                  <tr>
                    <td className="pl-4 pt-4">
                      <p>
                        <strong>Pepporoni Pizza </strong>
                        <br />{' '}
                        <span className="text-muted">(900-1210 Cal.)</span>
                        <br />
                        <span>$12.99</span>
                      </p>
                    </td>
                    <td className="align-middle float-right">
                      <img src={Pizza2} height="165px" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-6" style={{ border: '', height: '200px' }}>
            <div className="card rp-item" style={{ height: '170px' }}>
              <table height="90px" className="">
                <tbody>
                  <tr>
                    <td className="pl-4 pt-4">
                      <p>
                        <strong>Wings</strong>
                        <br />{' '}
                        <span className="text-muted">(500-950 Cal.)</span>
                        <br />
                        <span>$8.99</span>
                      </p>
                    </td>
                    <td className="align-middle float-right">
                      <img src={Wings} height="165px" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6" style={{ border: '', height: '200px' }}>
          <div className="card rp-item" style={{ height: '170px' }}>
              <table height="90px" className="">
                <tbody>
                  <tr>
                    <td className="pl-4 pt-4">
                      <p>
                        <strong>Breadsticks </strong>
                        <br />{' '}
                        <span className="text-muted">(200-420 Cal.)</span>
                        <br />
                        <span>$6.99</span>
                      </p>
                    </td>
                    <td className="align-middle float-right">
                      <img src={Bread} height="165px" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
