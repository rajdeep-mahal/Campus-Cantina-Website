
import '../assets/css/about_individual.css';
import '../assets/css/ownerlayout.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CustomerOrders = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const [orders, setOrders] = useState([]);
  const [modalItems, setModalItems] = useState([]);


  useEffect(() => {
    if (appUser.type === 'customer') {
      console.log(appUser.name)
      axios
        .get('http://localhost:3001/api/order/user-orders', {
          params: {
            customerName: `${appUser.name}`,
          },
        })
        .then((res) => {
          setOrders(res.data)
          // console.log(res.data)
        });
    }
  }, []);
  // const orders = [
  //   {
  //     id: '122343',
  //     restaurant: "Bob's Burgers",
  //     item: 'Burger, fries, coke',
  //     price: '$25',
  //     date: '3/15/21',
  //   },
  //   {
  //     id: '465440',
  //     restaurant: 'Pizza Slice',
  //     item: 'Pizza, wings',
  //     price: '$20',
  //     date: '3/3/21',
  //   },
  //   {
  //     id: '378800',
  //     restaurant: 'Planet Potatoes',
  //     item: 'Chilli Fries',
  //     price: '$12',
  //     date: '2/10/21',
  //   },
  // ];
  {
    /* Renders each row for My Orders Table */
  }
  // const renderMenuItem = (order, index) => {
  //   return (
  //     <tr key={index}>
  //       <td>{order.ID}</td>
  //       <td>{order.restaurantName}</td>
  //       <td>
  //         <button
  //           type="button"
  //           class="btn btn-outline-dark view-btn"
  //           data-toggle="modal"
  //           data-target="#viewModal"
  //         >
  //           View
  //         </button>
  //       </td>
  //       <td>{order.price}</td>
  //       <td> {order.id}</td>
  //       <td> Completed </td>
  //     </tr>
  //   );
  // };

  return (
    <>
      {appUser.type === 'customer' ? (
        <div className="container-fluid ">
          <br />
          <h3 className="owner-heading text-center"> My Orders</h3>
          <div className="table-responsive-sm order-table">
            <table class="table table-striped">
              {/* Table Header */}
              <thead class="table-header-menu">
                <tr>
                  <th scope="col"> Order # </th>
                  <th scope="col"> Order Sub ID </th>
                  <th scope="col"> Restaurant </th>
                  <th scope="col"> Items </th>
                  <th scope="col"> Price </th>
                  <th scope="col"> Status </th>
                  <th scope="col"> Delivery Location </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
              {/*For pending orders*/}
              {orders.filter((order) => order.Completed == 0).map((item, i) => (
                <tr key={i}>
                <td>{item.ID}</td>
                <td>{item.Order_Sub_ID}</td>
                <td>{item.Restaurant_Name}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-dark view-btn"
                    data-toggle="modal"
                    data-target="#viewModal"
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
                <td><span className = "font-weight-bold">&#36;</span>{item.Total}</td>
                <td className = "font-italic"> Pending </td>
                <td> {item.Delivery_Location} </td>
              </tr>
              )
          )}
          {/*For completed orders*/}
          {orders.filter((order) => order.Completed == 1).map((item, i) => (
                <tr key={i}>
                <td>{item.ID}</td>
                <td className = "text-center">{item.Order_Sub_ID}</td>
                <td>{item.Restaurant_Name}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-dark view-btn"
                    data-toggle="modal"
                    data-target="#viewModal"
                  >
                    View
                  </button>
                </td>
                <td><span className = "font-weight-bold">&#36;</span>{item.Total}</td>
                <td className = "font-italic"> Completed </td>
                <td>{item.Delivery_Location}</td>
              </tr>
              )
          )}
              </tbody>
            </table>
          </div>
          {/* View Modal */}
          <div
            class="modal fade"
            id="viewModal"
            data-backdrop="static"
            tabindex="-1"
            role="dialog"
            aria-labelledby="viewModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog " role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="viewModalLabel">
                    Ordered Items
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  
                  {/* {modalItems.map((item, i) => (
                        <ul class="list-group list-group-flush" key={i}>
                           <li class="list-group-item">1 x Cheeseburger </li>
                           <li class="list-group-item">{item.itemCount} x Large Diet Coke </li>
                           <li class="list-group-item">
                      Special Instructions: No Onions
                    </li>
                        </ul>
                      ))} */}
                    {/* <li class="list-group-item">1 x Cheeseburger </li>
                    <li class="list-group-item">1 x Large Diet Coke </li>
                    <li class="list-group-item">
                      Special Instructions: No Onions
                    </li> */}
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
                <div class="modal-footer">
                  <button type="button" class="btn modal-confirm-btn">
                    Confirm
                  </button>
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
