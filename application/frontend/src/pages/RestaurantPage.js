import React from 'react';
import '../assets/css/restaurant_page.css';
import Banner from '../assets/img/restaurant/banner.jpg';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import config from '../config.js';
import Pizza from '../assets/img/cuisines/Pizza.png';
import Pizza1 from '../assets/img/restaurant/pizza1.jpg';
import Pizza2 from '../assets/img/restaurant/pizza2.jpg';
import Wings from '../assets/img/restaurant/wings.jpg';
import Bread from '../assets/img/restaurant/bread.jpg';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RestaurantPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { loadError } = useLoadScript({
    googleMapsApiKey: config.googleAPI,
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {

    
  }, []);

  return (
    <div className="container">
      <div className="rp-banner">
        <img className="d-block w-100" src={Banner} style={{
          height: '350px',
        }}/>
      </div>


      <div className="ml-5 mr-4 mt-4 mb-4">
        <div
            className="float-right"
            style={{
              border: 'solid 1px lightgrey',
              width: '300px',
              height: '200px',
            }}
        >
          {/*

           Google Maps
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

        */}
        </div>


<div className="container">
        <div className="pl-1">
          <h1 className="primaryTextPage">Sliceline</h1>
          <p className="text-muted ">
            $$ • Pizza, Wings, Pepporoni <br />
            0.3 mi
          </p>
          <p className="text-muted openTag">
            OPEN
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
          <img src={Pizza} alt="logo" height="55" className="rounded mx-auto d-block" />
        <h4 className="text-center pb-3 pt-3">Menu</h4>
        </p>
        <div className="row m-2 ">
          <div className="col-sm-3 " style={{ border: '', height: '200px' }}>
            {/* <Link to='#' style={{ textDecoration: 'none' }}> */}
            <div
              className="secondaryTextPage card rp-item"
              style={{ height: '170px' }}
              onClick={openModal}
            >
              <table height="90px" className="">
                <tbody>
                  <tr>
                    <td className="pl-4 pt-4">
                      <p>
                      <br/>
                        <strong>Cheese Pizza </strong>
                        <br />{' '}
                        <span className="text-muted">(700-1180 Cal.)</span>
                        <br />
                        <span>$11.99</span>
                      </p>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
            {/* </Link> */}
          </div>
          <div className="col-sm-3" style={{ border: '', height: '200px' }}>
            <div className="card rp-item secondaryTextPage" style={{ height: '170px' }}>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-sm-3" style={{ border: '', height: '200px' }}>
            <div className="card rp-item secondaryTextPage" style={{ height: '170px' }}>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-3 " style={{ border: '', height: '200px' }}>
            <div className="card rp-item secondaryTextPage" style={{ height: '170px' }}>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>



      <Modal show={modalIsOpen} onHide={closeModal} centered>
        <div className="m-3">
          <h2>Cheese Pizza</h2>
          <span className="text-muted">(700-1180 Cal.)</span>
        </div>
        <p className="m-3">Comments</p>
        <div className="text-center">
          <textarea cols="45" rows="3"></textarea>
          <br />
          <br />
        </div>

        <Modal.Footer>
          <div className="mr-auto">
            <i
              class="fa fa-plus mr-2"
              style={{ color: 'gray' }}
              aria-hidden="true"
            ></i>

            <input className="text-center" size="2" placeholder="1"></input>
            <i
              class="fa fa-minus ml-2"
              style={{ color: 'gray' }}
              aria-hidden="true"
            ></i>
          </div>
          <button className="btn primary-color-bg text-white">Add to cart</button>
        </Modal.Footer>
      </Modal>
      </div>
  );
};

export default RestaurantPage;
