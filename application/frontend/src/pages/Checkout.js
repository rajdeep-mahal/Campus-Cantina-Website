import React from 'react';
import '../assets/css/customer_checkout.css';
import Home from './Home';
import { Link, Redirect } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="container text-center mb-5">
      <div className="h1 checkout-border border-bottom p-2 m-4 primary-color font-weight-bold">
        Checkout
      </div>

      <div className="form-group mx-auto w-50 mb-4">
        <label htmlFor="inputAddress" className="font-weight-bold">
          Delivery Address:
        </label>
        <input
          type="address"
          className="form-control border-warning "
          id="inputAddress"
          aria-describedby="addressHelp"
          placeholder="Dorm #323, SFSU, SF"
        />
      </div>

      <div className="row">
        <div className="col-md-9 mx-auto">
          <table className="table checkout-border border-bottom">
            <thead className="bg-warning">
              <tr>
                <th className="font-italic">Restaurant Name</th>
                <th className="font-italic">Comments</th>
                <th className="font-italic">Item Name</th>
                <th className="font-italic">Quantity</th>
                <th className="font-italic">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Restaurant 1</th>
                <td>extra meat, no cilantro</td>
                <td>Tacos</td>
                <td>2</td>
                <td>&#36;9.50</td>
              </tr>
              <tr>
                <th>Restaurant 2</th>
                <td>extra meat, extra cheese</td>
                <td>Burrito</td>
                <td>1</td>
                <td>&#36;12.00</td>
              </tr>
              <tr>
                <th>Restaurant 2</th>
                <td>none</td>
                <td>Coca Cola</td>
                <td>1</td>
                <td>&#36;2.50</td>
              </tr>
            </tbody>
          </table>
          <p className="text-muted mb-5 mx-auto">
            *Please pay total amount to delivery driver in cash*
          </p>
          <p className="float-left"> Delivery Notes:</p>
          <textarea className="text-field mx-4 mb-3 w-75"></textarea>
        </div>
        {/* total box */}
        <div className="card col-md-3 total-box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="float-left">Subtotal</span>{' '}
              <span className="float-right">&#36;24.00</span>{' '}
            </li>
            <li className="list-group-item">
              <span className="float-left">Tips</span>{' '}
              <span className="float-right">&#36;5.00</span>{' '}
            </li>
            <li className="list-group-item">
              <span className="float-left">Delivery Fee</span>{' '}
              <span className="float-right">&#36;3.00</span>{' '}
            </li>
            <li className="list-group-item">
              <span className="float-left">Discount</span>{' '}
              <span className="float-right">&#36;0.00</span>{' '}
            </li>
            <li className="list-group-item">
              <span className="float-left">Taxes</span>{' '}
              <span className="float-right">&#36;8.00</span>{' '}
            </li>
            <li className="list-group-item pt-4 total-bg font-weight-bold h5">
              <span className="float-left ">Total</span>{' '}
              <span className="float-right">&#36;40.00</span>{' '}
            </li>
            <button
              type="button"
              className="btn confirm-order m-3 btn-block mx-auto text-white col-lg-8"
              data-toggle="modal"
              data-target="#confirmorder"
            >
              <span className="">Confirm Order</span>
            </button>
          </ul>
        </div>
      </div>

      {/* Confirm Order modal */}
      <div
        className="modal fade"
        id="confirmorder"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="confirmorderTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmorderTitle">
                On the way!
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
              <div className="h5 font-weight-bold">
                Your order has been sent to the Restaurant!
              </div>
              <div className="h5 font-weight-bold">
                Please handover the payment to the driver after receiving your
                order.
              </div>
              <div className="h5 mt-4">Thank you!</div>

              <button
                type="button"
                className="btn confirm-order mt-4 text-white"
                onClick={(e) => {}}
              >
                <Link to="/">GOT IT!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
