import React from 'react';
import '../assets/css/customer_cart.css';
import { useSelector, useDispatch } from 'react-redux';

const CustomerCart = () => {
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);

  return (
    <>
      {cartItems.length == 0 ? (
        <li style={{ marginTop: '10px' }}>
          <span className=" p-2 m-1 h5">Your Cart is empty</span>
          <p className="primary-color p-2 m-1">Add items to get started</p>
        </li>
      ) : (
        <div className="small-container text-center mt-2">
          <table className="table table-light border">
            <thead>
              <tr>
                <th className="font-italic">Product</th>
                <th className="font-italic">Quantity</th>
                <th className="font-italic">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{item.itemName}</th>
                  <td>
                    <i className="btn primary-color fa fa-minus-circle"></i>
                    <span className="text-center">{item.itemCount}</span>
                    <i className="btn primary-color fa fa-plus-circle"></i>
                  </td>
                  <td>{item.itemPrice}</td>
                </tr>
              ))}

              {/* <tr>
            <th scope="row">Tacos</th>
            <td>
              <button className="quantity_button btn fa fa-plus-circle fa-xs"></button>
              <input
                className="quantity-input w-25 mx-1 text-center"
                type="number"
              ></input>
              <button className="quantity_button btn fa fa-minus-circle fa-xs"></button>
            </td>
            <td>&#36;9.50</td>
          </tr>
          <tr>
            <th scope="row">Coca-cola</th>
            <td>
              <button className="quantity_button btn fa fa-plus-circle fa-xs"></button>
              <input
                className="quantity-input w-25 mx-1 text-center"
                type="number"
              ></input>
              <button className="quantity_button btn fa fa-minus-circle fa-xs"></button>
            </td>
            <td>&#36;2.50</td> 
          </tr>*/}
            </tbody>
          </table>
          <div className="card">
            <div className="card-body">
              <span>Delivery Instructions: </span>
              <textarea className="w-100"></textarea>
            </div>
          </div>
          <div className="px-4">
            <table className="col text-center">
              <tbody>
                <tr>
                  <td className="h5 text-left py-3">Subtotal:</td>
                  <td className="h5 text-right">&#36; 24</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col text-center py-3">
            <button
              type="checkout"
              className="checkout_btn btn btn-lg btn-block text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default CustomerCart;
