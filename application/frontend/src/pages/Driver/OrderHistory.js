/*
Summary of DriverAvailableOrders.js: 
 - Renders on '/driver/orderhistory'
 - to load when clicked on Order History on the Sidebar for Drivers' login
 - View button is a modal to display the order details
*/
import '../../assets/css/driver.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DriverAvailableOrders = () => {
  const [orders, setOrders] = useState([]);
  const [modalItems, setModalItems] = useState([]);

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
  }, []);

  return (
    <div className="container text-center my-4 mx-auto table-responsive">
      <div className="order_header h3 text-white text-center py-2">
        Order History
      </div>
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
                <td className="border border_purple">{item.Customer_Name}</td>
                <td className="border border_purple">
                  {item.Delivery_Location}
                </td>
                <td className="border border_purple">
                  <span className="text-info font-italic">Completed</span>
                </td>
                <td className="border border_purple">&#36;{item.Total}</td>
                <td className="border border_purple">
                  <button
                    type="button"
                    className="btn btn-warning btn-sm border border_header"
                    data-toggle="modal"
                    data-target="#viewOrder1"
                    onClick={(e) => {
                      orders
                        .filter((order) => order.ID === item.ID)
                        .map((item, i) => {
                          setModalItems(JSON.parse(item.Order_Contents));
                        });
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* View order 1 */}
      <div
        className="modal fade"
        id="viewOrder1"
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
                    <th className="font-italic border border_purple p-2">
                      {' '}
                      Restaurant{' '}
                    </th>
                    <th className="font-italic border border_purple"> Item </th>
                    <th className="font-italic border border_purple p-1">
                      {' '}
                      Item Price{' '}
                    </th>
                    <th className="font-italic border border_purple p-1">
                      {' '}
                      Quantity{' '}
                    </th>
                    <th className="font-italic border border_purple p-2">
                      {' '}
                      Comments{' '}
                    </th>
                    <th className="font-italic border border_purple p-1">
                      {' '}
                      Item Total Price{' '}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {modalItems.map((item, i) => (
                    <tr key={i}>
                      <td className="border border_purple p-2">
                        {item.itemRestaurantName}
                      </td>
                      <td className="border border_purple p-2">
                        {item.itemName}
                      </td>
                      <td className="border border_purple">{item.itemPrice}</td>
                      <td className="border border_purple">{item.itemCount}</td>
                      <td className="border border_purple p-2">
                        {item.itemComments}
                      </td>
                      <td className="border border_purple">
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
    </div>
  );
};

export default DriverAvailableOrders;
