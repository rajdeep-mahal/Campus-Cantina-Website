import React from 'react';
//import restaurantcartoon from "../../assets/img/restaurant_ex.jpeg";
import axios from 'axios';
import '../../assets/css/index.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const OwnerProfile = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [ownerRestaurant, setOwnerRestaurant] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState([]);
  const [loadData, setLoadData] = useState(false);

  //Renders owner info from DB
  useEffect(() => {
    if (appUser.type === 'owner') {
      axios
        .get('http://localhost:3001/api/restaurant/all-restaurants')
        .then((res) => {
          // console.log(res.data);
          setLoadData(false);
          axios
            .get('http://localhost:3001/api/restaurant/owner-info', {
              params: { ownerEmail: appUser.email },
            })
            .then((res1) => {
              setOwnerInfo(res1.data);
              setLoadData(false);
              const tempOwnerRestaurant = res.data.filter(
                (restaurant) =>
                  restaurant.Name.trim() === res1.data[0].Restaurant_Name
              );
              setOwnerRestaurant(tempOwnerRestaurant);
              // console.log(ownerRestaurant);
            });
        });
    }
  }, [loadData, appUser]);

  //extract value from global redux (reads from store)
  return (
    <>
      {appUser.type === 'owner' ? (
        <div className="container">
          <br />

          <div className="text-center">
            <h3 className="owner-heading"> Profile </h3>
          </div>
          {ownerRestaurant.length === 0 ? (
            <>
              <div className="text-center primary-color h3 mt-4">
                Loading...{' '}
              </div>
            </>
          ) : (
            ownerRestaurant.map((item, index) => (
              <div key={index}>
                {item.Approved === 0 ? (
                  <div
                    className="alert alert-warning fade show text-center pending-alert w-75 mx-auto mt-4"
                    role="alert"
                  >
                    <strong> PENDING ADMIN APPROVAL WITHIN 24 HOURS </strong>
                  </div>
                ) : (
                  <div
                    className="alert alert-warning alert-dismissible fade show text-center live-alert w-75 mx-auto mt-4"
                    role="alert"
                  >
                    <strong> YOUR RESTAURANT IS NOW LIVE ! </strong>
                    <button
                      type="button"
                      className="close close-live text-warning"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
                <div className="editprofile">
                  {/* content header */}
                  <div className="border-bottom border-warning text-left">
                    {' '}
                    <h3>
                      <strong className="text-warning">{item.Name}</strong>
                    </h3>
                  </div>

                  {/* content body */}
                  {ownerInfo.map((ownerItem, i) => (
                    <div className="profile-content mt-3" key={i}>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Restaurant Owner</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="name"> {ownerItem.Name}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Contact</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="phone">{ownerItem.Phone}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Email</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="email">{ownerItem.Email}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Restaurant Address</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="address">{item.Address}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Cuisine</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="address">{item.Cuisine}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Restaurant Tags</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="address">{item.Tags}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Price Level</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="address">{item.Price_Level}</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-descrip">
                            <strong>Delivery Fee</strong>
                          </label>
                        </div>
                        <div className="col">
                          <label htmlFor="address">${item.Delivery_Fee}</label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      ) : appUser.type === 'guest' ||
        appUser.type === undefined ||
        appUser.type === 'customer' ? (
        <Redirect to="/" />
      ) : appUser.type === 'driver' ? (
        <Redirect to="/driver/current-orders" />
      ) : (
        <> </>
      )}
    </>
  );
};

export default OwnerProfile;
