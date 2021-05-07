import React, { useEffect } from 'react';
import '../assets/css/customer_cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCartItems,
  setCartItemsTotalCount,
  setCartTotal,
} from '../redux/actions/cartItemsActions';

const CustomerCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
  const cartItemsTotalCount = useSelector(
    (state) => state.cartItemsReducer.cartItemsTotalCount
  );
  const cartTotal = useSelector((state) => state.cartItemsReducer.cartTotal);

  return (
    <>
      {cartItems.length == 0 ? (
        <li style={{ marginTop: '10px' }}>
          <span className=" p-2 m-1 h5">Your Cart is empty</span>
          <p className="primary-color p-2 m-1">Add items to get started</p>
        </li>
      ) : (
        <div className="small-container text-center mt-2">
          <p className="h6 font-weight-bold">
            Total Count: {cartItemsTotalCount}
          </p>
          <table className="table table-light border">
            <thead>
              <tr>
                <th className="font-italic">Product</th>
                <th className="font-italic">Quantity</th>
                <th className="font-italic"></th>
                <th className="font-italic">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <th scope="row">
                    {item.itemName}&#160;&#160;
                    <i
                      className="fas fa-comment-dots secondary-color cart-icons"
                      data-toggle="tooltip"
                      data-placement="top"
                      title={item.itemComments}
                    />
                  </th>
                  <td>
                    <i
                      className="mr-2 primary-color fa fa-minus-circle cart-icons"
                      onClick={(e) => {
                        let temp = [...cartItems];
                        let temp_element = { ...temp[i] };
                        if (item.itemCount >= 2) {
                          temp_element.itemCount = item.itemCount - 1;
                          temp_element.itemCalculatedPrice = (
                            temp_element.itemCount * temp_element.itemPrice
                          ).toFixed(2);
                          dispatch(
                            setCartItemsTotalCount(cartItemsTotalCount - 1)
                          );
                          const tempCartTotal = (
                            parseFloat(cartTotal) -
                            parseFloat(temp_element.itemPrice)
                          ).toFixed(2);
                          dispatch(setCartTotal(tempCartTotal));
                        }
                        temp[i] = temp_element;
                        dispatch(setCartItems(temp));
                      }}
                    />
                    <span className="text-center">{item.itemCount}</span>
                    <i
                      className="ml-2 primary-color fa fa-plus-circle cart-icons"
                      onClick={(e) => {
                        let temp = [...cartItems];
                        let temp_element = { ...temp[i] };
                        if (item.itemCount < 9) {
                          temp_element.itemCount = item.itemCount + 1;
                          temp_element.itemCalculatedPrice = (
                            temp_element.itemCount * temp_element.itemPrice
                          ).toFixed(2);
                          dispatch(
                            setCartItemsTotalCount(cartItemsTotalCount + 1)
                          );
                          const tempCartTotal = (
                            parseFloat(cartTotal) +
                            parseFloat(temp_element.itemPrice)
                          ).toFixed(2);
                          dispatch(setCartTotal(tempCartTotal));
                        }
                        temp[i] = temp_element;
                        dispatch(setCartItems(temp));
                      }}
                    />
                  </td>
                  <td>
                    <i
                      className="text-danger fas fa-trash cart-icons"
                      onClick={(e) => {
                        let temp = [...cartItems];
                        let temp_element = { ...temp[i] };
                        dispatch(
                          setCartItemsTotalCount(
                            cartItemsTotalCount - temp_element.itemCount
                          )
                        );
                        const tempCartTotal = (
                          parseFloat(cartTotal) -
                          parseFloat(temp_element.itemCalculatedPrice)
                        ).toFixed(2);
                        dispatch(setCartTotal(tempCartTotal));
                        temp.splice(i, 1);
                        dispatch(setCartItems(temp));
                      }}
                    />
                  </td>
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
                  <td className="h5 text-right">${cartTotal}</td>
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
