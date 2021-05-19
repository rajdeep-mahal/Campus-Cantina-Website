/*
Summary of DriverAvailableOrders.js: 
 - Renders on '/driver/orderhistory'
 - to load when clicked on Order History on the Sidebar for Drivers' login
 - View button is a modal to display the order details
*/
import '../../assets/css/driver.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const DriverAvailableOrders = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);

  const [orders, setOrders] = useState([]);
  const [modalItems, setModalItems] = useState([]);

  useEffect(() => {
    if (appUser.type === 'driver') {
      axios
        .get('http://localhost:3001/api/driver/driver-info', {
          params: {
            driverEmail: appUser.email,
          },
        })
        .then((res) => {
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
  }, [appUser.email, appUser.type]);

  return (
    <>
      {appUser.type === 'driver' ? (
        <div className="container text-center my-4 mx-auto table-responsive">
          <div className="order_header h3 text-white text-center py-2">
            Order History
          </div>
          {orders.length > 0 ? (
            <table className="table table_order mx-auto my-auto">
              <thead>
                <tr className="table-dark primary-color">
                  <th className="border border_header">
                    <span className="font-italic "> Order ID</span>
                  </th>
                  <th className="border border_header">
                    <span className="font-italic">Customer Name</span>
                  </th>
                  <th className="border border_header">
                    <span className="font-italic">Delivery Address</span>
                  </th>
                  <th className="border border_header">
                    <span className="font-italic">Order Status</span>
                  </th>
                  <th className="border border_header">
                    <span className="font-italic">Order Total</span>
                  </th>
                  <th className="border border_header">
                    <span className="font-italic">Order Details</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders
                  .filter((order) => order.Completed === 1)
                  .map((item, i) => (
                    <tr key={i}>
                      <td className="border border_purple">{item.ID}</td>
                      <td className="border border_purple">
                        {item.Customer_Name}
                      </td>
                      <td className="border border_purple">
                        {item.Delivery_Location}
                      </td>
                      <td className="border border_purple">
                        <span className="text-info font-italic">Completed</span>
                      </td>
                      <td className="border border_purple">
                        &#36;{item.Total}
                      </td>
                      <td className="border border_purple">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm border border_header"
                          data-toggle="modal"
                          data-target="#viewOrder"
                          onClick={(e) => {
                            orders
                              .filter((order) => order.ID === item.ID)
                              .map((item, i) =>
                                setModalItems(JSON.parse(item.Order_Contents))
                              );
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center font-weight-bold primary-color h4 mt-5">
              No Orders Yet.. Please check back
            </div>
          )}
          {/* View Order Details*/}
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
                <div className="modal-body table-responsive">
                  <table className="table text-center">
                    <thead>
                      <tr className="bg-warning">
                        <th scope="col"> Item </th>
                        <th scope="col"> Comments </th>
                        <th scope="col"> Item Price </th>
                        <th scope="col"> Quantity </th>
                        <th scope="col"></th>
                        <th scope="col"> Total </th>
                      </tr>
                    </thead>
                    <tbody>
                      {modalItems.map((item, i) => (
                        <tr key={i}>
                          <td>{item.itemName}</td>
                          <td>{item.itemComments}</td>
                          <td>
                            <span>&#36;</span>
                            {item.itemPrice}
                          </td>
                          <td>{item.itemCount}</td>
                          <td> x </td>
                          <td>&#36;{item.itemCalculatedPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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

export default DriverAvailableOrders;
