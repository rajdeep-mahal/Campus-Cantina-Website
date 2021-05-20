import '../assets/css/about_individual.css';
import '../assets/css/ownerlayout.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/customer_orders.css';
import React, { useState, useEffect } from 'react';

const CustomerOrders = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [priceItems, setPriceItems] = useState([]);
  const [modalItems, setModalItems] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [uniqueOrders, setUniqueOrders] = useState([]);

  useEffect(() => {
    if (appUser.type === 'customer') {
      axios
        .get('http://localhost:3001/api/order/user-orders', {
          params: {
            customerName: `${appUser.name}`,
          },
        })
        .then((res) => {
          setAllOrders(res.data);
          const tempUniqueOrders = [
            ...new Set(res.data.map((order) => order.Order_Sub_ID)),
          ];
          setUniqueOrders(tempUniqueOrders);
        });
    }
  }, [appUser.type, appUser.name]);

  return (
    <>
      {appUser.type === 'customer' ? (
        <div className="container">
          <br />
          <h3 className="owner-heading text-center"> My Orders</h3>
          <div className="table-responsive order-table text-center">
            <table className="table table-bordered">
              {/* Table Header */}
              <thead className="table-header-menu">
                <tr>
                  <th scope="col"> Order # </th>
                  <th scope="col"> Restaurant </th>
                  <th scope="col"> Items </th>
                  <th scope="col"> Price </th>
                  <th scope="col"> Delivery Location </th>
                  <th scope="col"> Status </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {uniqueOrders.map((uOrder, i) =>
                  allOrders
                    .filter((order) => order.Order_Sub_ID === uniqueOrders[i])
                    .map((order, index) => (
                      <>
                        {index === 0 ? (
                          <tr>
                            <td
                              colSpan="7"
                              className="font-weight-bold h5 bg-parent-order"
                            >
                              Group Order #: {order.Order_Sub_ID}
                            </td>
                          </tr>
                        ) : (
                          <></>
                        )}
                        <tr key={index}>
                          <td className="font-weight-bold">{order.ID}</td>
                          <td>{order.Restaurant_Name}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-dark view-btn"
                              data-toggle="modal"
                              data-target="#viewModal"
                              onClick={(e) => {
                                setModalItems(JSON.parse(order.Order_Contents));
                              }}
                            >
                              View
                            </button>
                          </td>
                          <td>
                            ${order.Total}
                            <i
                              className="fas fa-info-circle pl-4 h5 text-info price-icon"
                              data-toggle="modal"
                              data-target="#priceModal"
                              onClick={(e) => {
                                const tempPriceItems = [];
                                const subTotal = (
                                  order.Total -
                                  order.Delivery_Fee -
                                  order.Service_Fee
                                ).toFixed(2);
                                tempPriceItems.push(parseFloat(subTotal));
                                tempPriceItems.push(order.Service_Fee);
                                tempPriceItems.push(order.Delivery_Fee);
                                tempPriceItems.push(order.Total);
                                // console.log(tempPriceItems);
                                setPriceItems(tempPriceItems);
                              }}
                            />
                          </td>
                          <td className="width-delivery-loc">
                            {order.Delivery_Location}
                          </td>
                          {order.Completed === 1 ? (
                            <td className="font-italic font-weight-bold bg-completed-order">
                              {' '}
                              Completed{' '}
                            </td>
                          ) : (
                            <td className="font-italic font-weight-bold bg-light">
                              {' '}
                              Processing{' '}
                            </td>
                          )}
                        </tr>
                      </>
                    ))
                )}
              </tbody>
            </table>
          </div>
          {/* View Modal */}
          <div
            className="modal fade"
            id="viewModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="viewModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="viewModalLabel">
                    Ordered Items
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
                        <th scope="col"> Item Name</th>
                        <th scope="col"> Comments </th>
                        <th scope="col"> Item Price </th>
                        <th scope="col"></th>
                        <th scope="col"> Quantity </th>
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
                          <td> x </td>
                          <td>{item.itemCount}</td>

                          <td>&#36;{item.itemCalculatedPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown Modal */}
          <div
            className="modal fade"
            id="priceModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="priceModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="priceModalLabel">
                    Price Breakdown
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
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Sub Total : </th>
                        <td>{priceItems[0]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Tax : </th>
                        <td>{priceItems[1]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Delivery Fee : </th>
                        <td>{priceItems[2]}</td>
                      </tr>
                      <tr className="bg-warning">
                        <th
                          scope="row"
                          className="font-weight-bold h5 primary-color"
                        >
                          Total Price :{' '}
                        </th>
                        <td className="font-weight-bold h5 primary-color">
                          {priceItems[3]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/sfsulogin" />
      )}
    </>
  );
};

export default CustomerOrders;
