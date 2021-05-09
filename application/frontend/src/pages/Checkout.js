import React from 'react';
import '../assets/css/customer_checkout.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  setCartItems,
  setCartItemsTotalCount,
  setCartTotal,
  setCartDeliveryInstructions,
  setCheckoutDeliveryAddress,
} from '../redux/actions/cartItemsActions';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
  const cartItemsTotalCount = useSelector(
    (state) => state.cartItemsReducer.cartItemsTotalCount
  );
  const cartTotal = useSelector((state) => state.cartItemsReducer.cartTotal);
  const cartDeliveryInstructions = useSelector(
    (state) => state.cartItemsReducer.cartDeliveryInstructions
  );
  const checkoutDeliveryAddress = useSelector(
    (state) => state.cartItemsReducer.checkoutDeliveryAddress
  );
  return (
    <>
      {!cartItemsTotalCount > 0 ? (
        <Redirect to="/" />
      ) : (
        <div className="container text-center mb-5">
          <div className="h1 checkout-border border-bottom p-2 m-4 primary-color font-weight-bold">
            Checkout
          </div>
          <div className="row">
            <div className="col-md-9 mx-auto">
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
              <table className="table checkout-border border-bottom">
                <thead className="bg-warning">
                  <tr>
                    <th className="font-italic">Restaurant Name</th>
                    <th className="font-italic">Item Name</th>
                    <th className="font-italic">Instructions to Chef</th>
                    <th className="font-italic">Quantity</th>
                    <th className="font-italic">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i}>
                      <th>{item.itemRestaurantName}</th>
                      <td>{item.itemName}</td>
                      <td>{item.itemComments}</td>
                      <td>{item.itemCount}</td>
                      <td>
                        &#36;
                        {item.itemCalculatedPrice === 0.0 ? (
                          <span>{item.itemPrice}</span>
                        ) : (
                          <span>{item.itemCalculatedPrice}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-muted my-4 mx-auto">
                *Please pay total amount to delivery driver in cash*
              </p>
              <p className="text-center"> Delivery Instructions:</p>
              <textarea
                className="mx-4 mb-3 w-50"
                value={cartDeliveryInstructions}
                onChange={(e) => {
                  dispatch(setCartDeliveryInstructions(e.target.value));
                }}
              />
            </div>
            {/* total box */}
            <div className="card col-md-3 total-box">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="float-left">Subtotal</span>
                  <span className="float-right">&#36;{cartTotal}</span>
                </li>
                <li className="list-group-item">
                  <span className="float-left">Tax Amount</span>
                  <span className="float-right">
                    &#36;{(0.1 * parseFloat(cartTotal)).toFixed(2)}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="float-left">Delivery Fee</span>
                  <span className="float-right">&#36;0.00</span>
                </li>
                <li className="list-group-item pt-4 total-bg font-weight-bold h5">
                  <span className="float-left ">Total</span>
                  <span className="float-right">
                    &#36;
                    {(
                      parseFloat(cartTotal) +
                      parseFloat(0.1 * parseFloat(cartTotal))
                    ).toFixed(2)}
                  </span>
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
                    Please handover the payment to the driver after receiving
                    your order.
                  </div>
                  <div className="h5 mt-4">Thank you!</div>

                  <button
                    type="button"
                    className="btn confirm-order mt-4 text-white"
                    onClick={(e) => {}}
                  >
                    GOT IT
                    {/* <Link to="/">GOT IT!</Link> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
