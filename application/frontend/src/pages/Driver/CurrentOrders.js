// import { getMaxListeners } from "../../../backend/db";
import '../../assets/css/driver.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MyMap from '../../components/MyMap';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CurrentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [clickedOrderID, setClickedOrderID] = useState(false);
  const [driverDetails, setDriverDetails] = useState([]);
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [modalItems, setModalItems] = useState([]);

  // alert will disappear automatically after 3 sec
  if (showAlert) {
    setTimeout(() => {
      setShowAlert(false);
      setLoadData(false);
    }, 3000);
  }

  const changeOrderStatus = (clickedOrderID) => {
    axios
      .post('http://localhost:3001/api/order/order-completed', null, {
        params: { orderID: clickedOrderID },
      })
      .then((res) => {
        setShowAlert(true);
        setLoadData(true);
      });
  };

  useEffect(() => {
    if (appUser.type === 'driver') {
      axios
        .get('http://localhost:3001/api/driver/driver-info', {
          params: {
            driverEmail: appUser.email,
          },
        })
        .then((res) => {
          setDriverDetails(res.data[0]);
          axios
            .get('http://localhost:3001/api/order/user-orders', {
              params: {
                driverID: res.data[0].ID,
              },
            })
            .then((res1) => {
              setOrders(res1.data);
            });
        });
    }
  }, [loadData, appUser.email, appUser.type]);

  return (
    <>
      {appUser.type === 'driver' ? (
        <div className="container-fluid">
          <div className="container mt-3">
            <div className=" text-center h5">
              <span className="font-weight-bold">Hello, </span>
              <span className=" current-order-text font-weight-bold  font-italic">
                {appUser.name}{' '}
              </span>{' '}
              <br />
              <span className="font-weight-bold">You are working for : </span>
              <span className="current-order-text font-weight-bold font-italic">
                {driverDetails.Restaurant}{' '}
              </span>
            </div>
            {showAlert ? (
              <div
                className="text-center mx-auto mt-2 alert alert-success fade show w-50"
                role="alert"
              >
                <strong>Success!</strong> Order Delivered
              </div>
            ) : (
              <></>
            )}
            <div
              className="modal fade"
              id="viewOrder"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="viewOrderTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="viewOrderTitle">
                      Order Details
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
                    <table className="table-responsive">
                      <thead>
                        <tr>
                          <th className="font-italic border border_purple p-2 text-center">
                            {' '}
                            Restaurant{' '}
                          </th>
                          <th className="font-italic border border_purple text-center">
                            {' '}
                            Item{' '}
                          </th>
                          <th className="font-italic border border_purple p-1 text-center">
                            {' '}
                            Item Price{' '}
                          </th>
                          <th className="font-italic border border_purple p-1 text-center">
                            {' '}
                            Quantity{' '}
                          </th>
                          <th className="font-italic border border_purple p-2 text-center">
                            {' '}
                            Comments{' '}
                          </th>
                          <th className="font-italic border border_purple p-1 text-center">
                            {' '}
                            Item Total Price{' '}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {modalItems.map((item, i) => (
                          <tr key={i}>
                            <td className="border border_purple p-2 text-center">
                              {item.itemRestaurantName}
                            </td>
                            <td className="border border_purple p-2 text-center">
                              {item.itemName}
                            </td>
                            <td className="border border_purple text-center">
                              <span className="font-weight-bold">&#36;</span>
                              {item.itemPrice}
                            </td>
                            <td className="border border_purple text-center">
                              {item.itemCount}
                            </td>
                            <td className="border border_purple p-2 text-center">
                              {item.itemComments}
                            </td>
                            <td className="border border_purple text-center">
                              &#36;{item.itemCalculatedPrice}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {orders.filter((order) => order.Completed === 0).length > 0 ? (
              orders
                .filter((order) => order.Completed === 0)
                .map((item, i) => (
                  <div
                    className="card border card_customerorder_body my-3"
                    key={i}
                  >
                    <div className="card-header card_customerorder h4 pt-3 font-italic font-weight-bold text-white">
                      Customer Order:
                      <span className="h4 pl-2">#{item.ID}</span>
                    </div>
                    <div className="card-body">
                      <div className="h3 text-center font-weight-bold current-order-text">
                        Head to Customer
                      </div>
                      <div className="d-flex justify-content-around mt-4 flex-wrap">
                        <div>
                          <table className="table">
                            <tbody>
                              <tr>
                                <th scope="row" className="current-order-text">
                                  Order No :
                                </th>
                                <td>#{item.ID}</td>
                              </tr>
                              <tr>
                                <th scope="row" className="current-order-text">
                                  Order Details:
                                </th>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning current-order-text"
                                    data-toggle="modal"
                                    data-target="#viewOrder"
                                    onClick={(e) => {
                                      orders
                                        .filter((order) => order.ID === item.ID)
                                        .map((item, i) =>
                                          setModalItems(
                                            JSON.parse(item.Order_Contents)
                                          )
                                        );
                                    }}
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row" className="current-order-text">
                                  Total :
                                </th>
                                <td>&#36;{item.Total}</td>
                              </tr>
                              <tr>
                                <th scope="row" className="current-order-text">
                                  Customer Name :
                                </th>
                                <td>{item.Customer_Name}</td>
                              </tr>
                              <tr>
                                <th scope="row" className="current-order-text">
                                  Delivery Location :
                                </th>
                                <td className="delivery-address-width">
                                  {item.Delivery_Location}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row" className="current-order-text">
                                  Delivery Instructions:
                                </th>
                                <td>{item.Delivery_Instruction}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <div className="m-2 restaurant-home-map">
                            <MyMap></MyMap>
                          </div>
                        </div>
                      </div>
                      <div className="click_delivered text-center text-muted">
                        *Click delivered once food is handed to customer*
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn bg-warning current-order-text text-center"
                          data-toggle="modal"
                          data-target="#CompletedOrder"
                          onClick={(e) => {
                            setClickedOrderID(parseInt(item.ID));
                          }}
                        >
                          <span className="font-weight-bold">Delivered!</span>
                        </button>
                      </div>
                    </div>
                    {/* delivery confirmation modal */}
                    <div
                      className="modal fade"
                      id="CompletedOrder"
                      role="dialog"
                      aria-labelledby="#CompletedOrder"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header h5">
                            <strong> Confirm Delivery </strong>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body modal-edit">
                            <p className="h5 primary-color mb-4 mx-auto text-center">
                              Please confirm that you have received payment for
                              this order
                            </p>
                            <div className="d-flex justify-content-center">
                              <div className="mx-4">
                                <button
                                  type="button"
                                  className="btn bg-warning btn-lg primary-color text-center m-1 signout-buttons"
                                  data-dismiss="modal"
                                  onClick={(e) => {
                                    changeOrderStatus(clickedOrderID);
                                  }}
                                >
                                  Yes
                                </button>
                              </div>
                              <div className="mx-4">
                                <button
                                  type="submit"
                                  className="btn bg-warning btn-lg  m-1 primary-color"
                                  value="Submit"
                                  data-dismiss="modal"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <div className="container my-4">
                <h3>No Pending Orders.. Please check back</h3>
              </div>
            )}
          </div>
        </div>
      ) : appUser.type === 'guest' ||
        appUser.type === undefined ||
        appUser.type === 'customer' ? (
        <Redirect to="/" />
      ) : appUser.type === 'owner' ? (
        <Redirect to="/owner/menu" />
      ) : (
        <> </>
      )}
    </>
  );
};
export default CurrentOrders;
