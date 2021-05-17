// import { getMaxListeners } from "../../../backend/db";
import '../../assets/css/driver.css';
import map_sample from '../../assets/img/map_customerorder.png';
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
    axios
      .get('http://localhost:3001/api/order/user-orders', {
        params: {
          driverID: 586,
        },
      })
      .then((res) => {
        setOrders(res.data);
      });
  }, [loadData]);

  return (
    <div className="container-fluid">
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
      <div className="container">
        {orders.filter((order) => order.Completed == 0).length > 0 ? (
          orders
            .filter((order) => order.Completed == 0)
            .map((item, i) => (
              <div className="card border card_customerorder_body m-3">
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
                              Total :
                            </th>
                            <td>{item.Total}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="current-order-text">
                              Order Contents
                            </th>
                            <td>
                              {' '}
                              TBD
                              {/* {item.Contents} */}
                            </td>
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
                            <td>{item.Delivery_Location}</td>
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
                      <MyMap></MyMap>
                    </div>
                  </div>
                  <div className="click_delivered text-center text-muted">
                    *Click delivered once food is handed to customer*
                  </div>
                  <button
                    type="button"
                    className="btn btn-block bg-warning delivered_button current-order-text w-25 mx-auto"
                    data-toggle="modal"
                    data-target="#CompletedOrder"
                    onClick={(e) => {
                      setClickedOrderID(parseInt(item.ID));
                    }}
                  >
                    Delivered!
                  </button>
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
                          Please confirm that you have received payment for this
                          order
                        </p>
                        <div className="d-flex justify-content-center">
                          <div className="mx-4">
                            <button
                              type="button"
                              className="btn save-btn btn-lg primary-color text-center m-1 signout-buttons"
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
                              className="btn save-btn btn-lg  m-1 primary-color"
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
  );
};
export default CurrentOrders;
