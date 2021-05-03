/*
Summary of RestaurantPage.js: 
 - Renders on '/restaurantpage'
 - to load when the restaurant item is clicked
 - Components: Google Map, Add Menu items Modal, Banner Image, Menu Items
*/
import React from 'react';
import '../assets/css/restaurant_page.css';
// import Banner from '../assets/img/restaurant/banner.jpg';
import Banner from '../assets/img/restaurant/Restaurant_Banner.jpg';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import config from '../config.js';
import Pizza from '../assets/img/cuisines/Pizza.png';

const RestaurantPage = () => {
  React.useEffect(() => {}, []);

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
        mapContainerStyle={{ height: '270px', width: '350px' }}
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
    <div className="container-fluid">
      <div className="mx-5">
        <img className="w-100 restaurantBanner" src={Banner} />

        <div className="m-4">
          <div className="float-right restaurant-home-map">
            <MyMap></MyMap>
          </div>
        </div>

        <div className="container">
          <div className="pl-1">
            <p className="primaryTextPage h1">Sliceline</p>
            <mark className="font-weight-bold"> COVID-19 Safe </mark>
            <span className="openTag">OPEN </span>
            <p className="text-muted mt-2">
              $$ • Pizza, Wings, Pepperoni <br />
              0.3 mi <br />
              <span className="text-muted">145 Second Street</span>
            </p>
          </div>
          <div className="rp-info secondaryTextPage">
            <table height="90px" className="mx-auto">
              <div className="">
                <tbody>
                  <tr>
                    <td className="align-middle primaryTextPage">
                      <p>
                        $1.99 <br /> delivery fee
                      </p>
                    </td>
                    <td className="align-middle p-3 primaryTextPage">
                      <p>
                        18-24 <br /> minutes
                      </p>
                    </td>
                  </tr>
                </tbody>
              </div>
            </table>
          </div>
        </div>
      </div>
      <hr />

      <div className="container ">
        <div className="rp-menu-items m-4 ">
          <p>
            <img
              src={Pizza}
              alt="logo"
              height="55"
              className="rounded mx-auto d-block"
            />
            <h4 className="text-center pb-3 pt-3">
              Choose from the Menu below
            </h4>
          </p>
          <div className="row m-2 ">
            <div className="col-sm-3 " style={{ border: '', height: '200px' }}>
              {/* <Link to='#' style={{ textDecoration: 'none' }}> */}
              <div
                className="secondaryTextPage card rp-item"
                style={{ height: '170px' }}
              >
                <table height="90px" className="">
                  <tbody>
                    <tr>
                      <td className="text-center pt-3">
                        <p>
                          <strong>Cheese Pizza </strong>
                          <br />{' '}
                          <span className="text-muted">(700-1180 Cal.)</span>
                          <br />
                          <span>$11.99</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot
                    className="text-center"
                    data-toggle="modal"
                    data-target="#modalCenter"
                  >
                    <i className="fas fa-cart-plus h4 mt-2 add-cart-icon" />
                  </tfoot>
                </table>
              </div>
              {/* </Link> */}
            </div>
            <div className="col-sm-3" style={{ border: '', height: '200px' }}>
              <div
                className="card rp-item secondaryTextPage"
                style={{ height: '170px' }}
              >
                <table height="90px" className="">
                  <tbody>
                    <tr>
                      <td className="text-center pt-3">
                        <p>
                          <strong>Pepporoni Pizza </strong>
                          <br />{' '}
                          <span className="text-muted">(900-1210 Cal.)</span>
                          <br />
                          <span>$12.99</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="text-center">
                    <i className="fas fa-cart-plus h4 mt-2" />
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="col-sm-3" style={{ border: '', height: '200px' }}>
              <div
                className="card rp-item secondaryTextPage"
                style={{ height: '170px' }}
              >
                <table height="90px" className="">
                  <tbody>
                    <tr>
                      <td className="text-center pt-3">
                        <p>
                          <strong>Wings</strong>
                          <br />{' '}
                          <span className="text-muted">(500-950 Cal.)</span>
                          <br />
                          <span>$8.99</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="text-center">
                    <i className="fas fa-cart-plus h4 mt-2" />
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="col-sm-3 " style={{ border: '', height: '200px' }}>
              <div
                className="card rp-item secondaryTextPage"
                style={{ height: '170px' }}
              >
                <table height="90px" className="">
                  <tbody>
                    <tr>
                      <td className="text-center pt-3">
                        <p>
                          <strong>Breadsticks </strong>
                          <br />{' '}
                          <span className="text-muted">(200-420 Cal.)</span>
                          <br />
                          <span>$6.99</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="text-center">
                    <i className="fas fa-cart-plus h4 mt-2" />
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade modal-div"
        id="modalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLongTitle">
                Cheese Pizza
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <span className="text-muted">(700-1180 Cal.)</span>
              <p className="m-3">Comments</p>
              <div className="text-center">
                <textarea cols="45" rows="3"></textarea>
              </div>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button> */}
              <div className="mr-auto">
                <i
                  className="fa fa-plus mr-2"
                  style={{ color: 'gray' }}
                  aria-hidden="true"
                ></i>

                <input className="text-center" size="2" placeholder="1"></input>
                <i
                  className="fa fa-minus ml-2"
                  style={{ color: 'gray' }}
                  aria-hidden="true"
                ></i>
              </div>
              <button type="button" className="btn primary-color-bg text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
