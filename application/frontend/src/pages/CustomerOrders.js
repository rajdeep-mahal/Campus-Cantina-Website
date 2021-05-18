import React from 'react';
import '../assets/css/about_individual.css';
import '../assets/css/ownerlayout.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const CustomerOrders = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  const orders = [
    {
      id: '122343',
      restaurant: "Bob's Burgers",
      item: 'Burger, fries, coke',
      price: '$25',
      date: '3/15/21',
    },
    {
      id: '465440',
      restaurant: 'Pizza Slice',
      item: 'Pizza, wings',
      price: '$20',
      date: '3/3/21',
    },
    {
      id: '378800',
      restaurant: 'Planet Potatoes',
      item: 'Chilli Fries',
      price: '$12',
      date: '2/10/21',
    },
  ];
  {
    /* Renders each row for My Orders Table */
  }
  const renderMenuItem = (order, index) => {
    return (
      <tr key={index}>
        <td>{order.date}</td>
        <td>{order.restaurant}</td>
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
        <td>{order.price}</td>
        <td> {order.id}</td>
        <td> Completed </td>
      </tr>
    );
  };

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
                  <th scope="col"> Date </th>
                  <th scope="col"> Restaurant </th>
                  <th scope="col"> Items </th>
                  <th scope="col"> Price </th>
                  <th scope="col"> Order # </th>
                  <th scope="col"> Status </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>{orders.map(renderMenuItem)}</tbody>
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
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">1 x Cheeseburger </li>
                    <li class="list-group-item">1 x Large Diet Coke </li>
                    <li class="list-group-item">
                      Special Instructions: No Onions
                    </li>
                  </ul>
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
