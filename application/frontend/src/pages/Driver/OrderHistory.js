/*
Summary of DriverAvailableOrders.js: 
 - Renders on '/driver/orderhistory'
 - to load when clicked on Order History on the Sidebar for Drivers' login
 - View button is a modal to display the order details
*/
import '../../assets/css/driver.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// try using bootstrap modal for viewing order details
function viewOrder() {
  var popup = document.getElementById('viewOrder');
  popup.classList.toggle('show');
}

const DriverAvailableOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderID, setOrderID] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/order/user-orders', {
        params: {
          driverID: 5,
        },
      })
      .then((res) => {
        setOrders(res.data);
      });
  },[]);

  return (
    <div className="container text-center m-4">
      <div className="order_header h3 text-white text-center py-2">
        Order History
      </div>
      <table className="table table_order">
        <thead>
          <tr>
            <th className="border border_header">
              <span className="font-italic"> Order ID</span>
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
                <td className="border border_body">{item.ID}</td>
                <td className="border border_body">{item.Customer_Name}</td>
                <td className="border border_body">{item.Delivery_Location}</td>
                <td className="border border_body">
                  <span className="text-info font-italic">Completed</span>
                </td>
                <td className="border border_body">&#36;{item.Total}</td>
                <td className="border border_body">{item.Order_Contents}</td>
                <td className="border border_body"><button
                type="button"
                className="btn btn-warning btn-sm border border_header"
                data-toggle="modal"
                data-target="#viewOrder1"
                onClick={(e) => {
                  setOrderID(item.ID);
                }}
              >
                View
              </button></td>
                <td className="border border_body">{item.Order_Contents[i].itemName}</td>
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
              <table className="table table-light">
                <thead>
                  <tr>
                    <th className="font-italic"> Restaurant </th>
                    <th className="font-italic"> Item </th>
                    <th className="font-italic"> Item Price </th>
                    <th className="font-italic"> Quantity </th>
                    <th className="font-italic"> Comments </th>
                    <th className="font-italic"> Sub Total </th>
                  </tr>
                </thead>

                <tbody>
                {/* {orders
            .filter((order) => order.ID === orderID)
            .map((item, i) => (
              <tr key={i}>
                
              </tr>
            ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* View order 2 */}
      <div
        className="modal fade"
        id="viewOrder2"
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
              <table className="table table-light">
                <thead>
                  <tr>
                    <th className="font-italic"> Items </th>
                    <th className="font-italic"> Quantity </th>
                    <th className="font-italic"> Price </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th> Pho combination</th>
                    <th> 1 </th>
                    <th> &#36; 15 </th>
                  </tr>
                  <tr>
                    <th>Thai Iced Tea</th>
                    <th>1</th>
                    <th>&#36; 4.50</th>
                  </tr>
                  <tr>
                    <th>Egg rolls</th>
                    <th>1</th>
                    <th>&#36; 6.50</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* View order 3 */}
      <div
        className="modal fade"
        id="viewOrder3"
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
              <table className="table table-light">
                <thead>
                  <tr>
                    <th className="font-italic"> Items </th>
                    <th className="font-italic"> Quantity </th>
                    <th className="font-italic"> Price </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th> Burger</th>
                    <th> 1 </th>
                    <th> &#36; 8.50 </th>
                  </tr>
                  <tr>
                    <th>Coca Cola</th>
                    <th>1</th>
                    <th>&#36; 2.50</th>
                  </tr>
                  <tr>
                    <th>Sweet Potato Fries</th>
                    <th>1</th>
                    <th>&#36; 4.50</th>
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

export default DriverAvailableOrders;
