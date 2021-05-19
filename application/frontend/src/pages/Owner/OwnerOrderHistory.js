/*
Summary of OwnerOrderHistory.js: 
 - Renders on '/owner/orders'
 - to load when clicked on Orders on the Sidebar for Owner's login
*/
import React, { useEffect, useState } from 'react';
import '../../assets/css/ownerlayout.css';
import '../../assets/css/index.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const OwnerOrderHistory = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [orderItems, setOrderItems] = useState([]);
  const [orderContent, setOrderContent] = useState([]);
  const [driversList, setDriversList] = useState([]);
  const [clickedOrderIDAssignDriver, setClickedOrderIDAssignDriver] =
    useState('');
  const [selectedDriverName, setSelectedDriverName] = useState('');
  const [loadData, setLoadData] = useState(false);

  const handleAssignDriver = (e) => {
    e.preventDefault();
    let selectedDriverID = driversList
      .filter((driver) => driver.Name === selectedDriverName)
      .map((d1) => d1.ID);
    axios
      .post('http://localhost:3001/api/order/assign-driver', null, {
        params: {
          orderID: clickedOrderIDAssignDriver,
          driverID: selectedDriverID[0],
        },
      })
      .then((res) => {
        // console.log(res);
        setSelectedDriverName('');
        setLoadData(true);
      });
  };

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
              setLoadData(false);
              const tempOwnerRestaurant = res.data.filter(
                (restaurant) =>
                  restaurant.Name.trim() === res1.data[0].Restaurant_Name
              );
              axios
                .get('http://localhost:3001/api/order/user-orders', {
                  params: { restaurantName: tempOwnerRestaurant[0].Name },
                })
                .then((res) => {
                  setOrderItems(res.data);
                  setLoadData(false);
                  setOrderContent([]);
                });

              axios
                .get('http://localhost:3001/api/driver/all-drivers')
                .then((res) => {
                  const tempList = res.data.filter(
                    (row) => row.Restaurant === tempOwnerRestaurant[0].Name
                  );
                  setDriversList(tempList);
                });
            });
        });
    }
  }, [loadData, appUser.email, appUser.type]);

  return (
    <>
      {appUser.type === 'owner' ? (
        <div className="container text-center">
          <br />
          <h3 className="owner-heading"> Orders</h3>

          {orderItems.length > 0 ? (
            <div className="table-responsive order-table mb-5">
              {/* Orders Table */}
              <table className="table table-striped ">
                <thead>
                  <tr className="order-list-title">
                    <th scope="col">Order #</th>
                    <th scope="col">Items</th>
                    <th scope="col">Customer</th>
                    {/* <th scope="col">Total Price</th> */}
                    <th scope="col">Delivery Address</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Driver</th>
                  </tr>
                </thead>

                <tbody>
                  <>
                    {orderItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.ID}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-dark view-btn"
                            data-toggle="modal"
                            data-target="#viewModal"
                            onClick={(e) => {
                              setOrderContent(JSON.parse(item.Order_Contents));
                            }}
                          >
                            View
                          </button>
                        </td>

                        <td style={{ width: 150 }}>{item.Customer_Name}</td>
                        {/* <td>${item.Total}</td> */}
                        <td style={{ width: 300 }}>{item.Delivery_Location}</td>
                        <td>
                          {item.Completed === 0 ? (
                            <label> Pending</label>
                          ) : (
                            <label> Completed</label>
                          )}
                        </td>

                        <td>
                          {item.Driver_ID !== 0 ? (
                            driversList
                              .filter((driver) => driver.ID === item.Driver_ID)
                              .map((d1) => d1.Name)
                          ) : (
                            <>
                              <span className="font-weight-bold">TBD</span>
                              <i
                                className="fas fa-edit assign-driver-icon ml-3 h4"
                                data-toggle="modal"
                                data-target="#assignModal"
                                onClick={(e) => {
                                  setClickedOrderIDAssignDriver(item.ID);
                                }}
                              />
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <br /> <br />
              <h4 className="owner-heading text-center">
                {' '}
                Waiting to recieve orders...
              </h4>
            </>
          )}
          {/* View Modal */}
          <div
            className="modal fade"
            id="viewModal"
            tabIndex="-1"
            role="dialog"
            data-dismiss="modal"
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
                <div className="modal-body">
                  <table className="table text-center">
                    <thead>
                      <tr className="bg-warning">
                        <th scope="col">Item</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderContent.map((items, index) => (
                        <tr key={index}>
                          <td>{items.itemName}</td>
                          <td>{items.itemComments}</td>
                          <td>${items.itemPrice}</td>
                          <td> x </td>
                          <td>{items.itemCount}</td>
                          <td>
                            <strong>{items.itemCalculatedPrice}</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Assign Driver Modal */}
          <div
            className="modal fade pb-5"
            id="assignModal"
            tabIndex="-1"
            role="dialog"
            data-dismiss="modal"
            aria-hidden="true"
          >
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="viewModalLabel">
                    Assign to Driver
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
                  <select
                    className="custom-select"
                    id="inlineFormCustomSelect"
                    value={selectedDriverName}
                    // defaultValue={''}
                    onChange={(e) => setSelectedDriverName(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Assign to a Driver...
                    </option>
                    {driversList.map((driver, i) => (
                      <option value={driver.Name} key={i}>
                        {driver.Name}
                      </option>
                    ))}
                  </select>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn bg-warning btn-lg btn-block primary-color text-center mt-5 w-25"
                      data-dismiss="modal"
                      onClick={handleAssignDriver}
                    >
                      Assign
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default OwnerOrderHistory;
