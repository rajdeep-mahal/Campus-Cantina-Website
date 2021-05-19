import React, { useState, useEffect } from 'react';
import '../assets/css/customer_checkout.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import {
  setCartDeliveryInstructions,
  setCartItems,
  setCartItemsTotalCount,
} from '../redux/actions/cartItemsActions';
import PlacesAutocomplete from 'react-places-autocomplete'; //getLatLng, //geocodeByAddress,
import ReactDependentScript from 'react-dependent-script';
import config from '../config.js';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 3);

const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // redux items
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);

  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
  // const cartItemsTotalCount = useSelector(
  //   (state) => state.cartItemsReducer.cartItemsTotalCount
  // );
  const cartTotal = useSelector((state) => state.cartItemsReducer.cartTotal);
  const cartDeliveryInstructions = useSelector(
    (state) => state.cartItemsReducer.cartDeliveryInstructions
  );
  const cartDeliveryFee = useSelector(
    (state) => state.cartItemsReducer.cartDeliveryFee
  );

  // local state variables
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  if (showAlert) {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  const handleOrderCheckout = (e) => {
    // get unique restaurants list if there are items from multiple restaurants in the cart
    const cartRestaurantsList = [
      ...new Set(cartItems.map((item) => item.itemRestaurantName)),
    ];
    const filteredCartItems = [];
    // if ordering from multiple restaurants
    if (cartRestaurantsList.length > 1) {
      for (let i = 0; i < cartRestaurantsList.length; i++) {
        const list = cartItems.filter(
          (cartItem) => cartItem.itemRestaurantName === cartRestaurantsList[i]
        );
        filteredCartItems.push(list);
      }
      //  Common order id
      let ID1 = nanoid();
      for (let i = 0; i < filteredCartItems.length; i++) {
        // Unique order id for each restaurant ordered from
        let ID = nanoid();
        // get current restaurant for  restaurant Name, restaurant ID & restaurant Address
        const currentRestaurant = restaurantsList.filter(
          (restaurant) =>
            restaurant.Name === filteredCartItems[i][0].itemRestaurantName
        );
        // calculate total value & service fee
        let currentSubTotal = 0.0;
        filteredCartItems[i].map(
          (fItem, index) =>
            (currentSubTotal = parseFloat(
              currentSubTotal + parseFloat(fItem.itemCalculatedPrice)
            ))
        );
        // console.log(currentRestaurant[0].Delivery_Fee);
        // console.log((0.1 * parseFloat(currentSubTotal.toFixed(2))).toFixed(2));
        // console.log(
        //   (
        //     parseFloat(currentSubTotal.toFixed(2)) +
        //     parseFloat(0.1 * parseFloat(currentSubTotal.toFixed(2))) +
        //     parseFloat(currentRestaurant[0].Delivery_Fee)
        //   ).toFixed(2)
        // );
        axios
          .post('http://localhost:3001/api/order/place-order', {
            orderID: ID,
            orderSubID: ID1,
            restaurantID: `${currentRestaurant[0].ID}`,
            restaurantName: currentRestaurant[0].Name,
            restaurantAddress: currentRestaurant[0].Address,
            customerID: `${userInfo[0].ID}`,
            customerName: userInfo[0].Name,
            deliveryLocation: deliveryAddress,
            orderContents: JSON.stringify(filteredCartItems[i]),
            deliveryFee: `${currentRestaurant[0].Delivery_Fee}`,
            serviceFee: (0.1 * parseFloat(currentSubTotal.toFixed(2))).toFixed(
              2
            ),
            total: (
              parseFloat(currentSubTotal.toFixed(2)) +
              parseFloat(0.1 * parseFloat(currentSubTotal.toFixed(2))) +
              parseFloat(currentRestaurant[0].Delivery_Fee)
            ).toFixed(2),
            deliveryInstructions: cartDeliveryInstructions,
            driverID: '0',
          })
          .then((res) => {
            // console.log(res.data);
            if (typeof res.data === 'string') {
              if (res.data.substring(0, 7) === 'Invalid') {
                alert(
                  `Please Try Again.. Check for special characters  \n Error: ${res.data}`
                );
              }
            } else {
              if (i === filteredCartItems.length - 1) {
                alert(
                  'Thank you..!! Your Order is on the Way.. \n Please handover the payment to the Delivery Driver..'
                );
                dispatch(setCartItems([]));
                dispatch(setCartItemsTotalCount(0));
                history.push('/customer/orders');
              }
            }
          });
      }
    }
    // if ordering from single restaurant
    else {
      let ID = nanoid();
      const currentRestaurant = restaurantsList.filter(
        (restaurant) => restaurant.Name === cartRestaurantsList[0]
      );
      axios
        .post('http://localhost:3001/api/order/place-order', {
          orderID: ID,
          orderSubID: null,
          restaurantID: `${currentRestaurant[0].ID}`,
          restaurantName: currentRestaurant[0].Name,
          restaurantAddress: currentRestaurant[0].Address,
          customerID: `${userInfo[0].ID}`,
          customerName: userInfo[0].Name,
          deliveryLocation: deliveryAddress,
          orderContents: JSON.stringify(cartItems),
          deliveryFee: `${currentRestaurant[0].Delivery_Fee}`,
          serviceFee: (0.1 * parseFloat(cartTotal)).toFixed(2),
          total: (
            parseFloat(cartTotal) +
            parseFloat(0.1 * parseFloat(cartTotal)) +
            parseFloat(cartDeliveryFee)
          ).toFixed(2),
          deliveryInstructions: cartDeliveryInstructions,
          driverID: '0',
        })
        .then((res) => {
          // console.log(res.data);
          if (typeof res.data === 'string') {
            if (res.data.substring(0, 7) === 'Invalid') {
              alert(
                `Please Try Again.. Check for special characters  \n Error: ${res.data}`
              );
            }
          } else {
            alert(
              'Thank you..!! Your Order is on the Way.. \n Please handover the payment to the Delivery Driver..'
            );
            history.push('/customer/orders');
            dispatch(setCartItems([]));
            dispatch(setCartItemsTotalCount(0));
          }
        });
    }
  };

  useEffect(() => {
    if (appUser.type === 'customer') {
      if (cartItems.length !== 0) {
        let source = axios.CancelToken.source();
        axios
          .get('http://localhost:3001/api/sfsucustomer/customer-info', {
            params: { customerEmail: appUser.email },
            cancelToken: source.token,
          })
          .then((res) => setUserInfo(res.data))
          .catch((err) => err);
        return () => {
          source.cancel();
        };
      }
    }
  }, [appUser.email, appUser.type, cartItems.length]);

  return (
    <>
      {appUser.type === 'customer' ? (
        cartItems.length === 0 ? (
          <>
            {/* {alert(`No Cart Items to checkout.. \n Redirecting to Home page`)} */}
            <Redirect to="/" />
          </>
        ) : (
          <div className="container text-center mb-5">
            <div className="h1 checkout-border border-bottom p-2 m-4 primary-color font-weight-bold">
              Checkout
            </div>
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div className="form-group w-75 mx-auto mb-4">
                  {showAlert ? (
                    <div
                      className="text-center mt-2 alert alert-danger fade show"
                      role="alert"
                    >
                      Please enter Delivery Address to continue
                    </div>
                  ) : (
                    <> </>
                  )}
                  <label
                    htmlFor="inputAddress"
                    className="float-left font-weight-bold"
                  >
                    Delivery Address:
                  </label>
                  <br />
                  <ReactDependentScript
                    loadingComponent={<div>Loading....</div>}
                    scripts={[
                      `https://maps.googleapis.com/maps/api/js?key=${config.googleAPI}&libraries=places`,
                    ]}
                  >
                    <PlacesAutocomplete
                      value={deliveryAddress}
                      onChange={setDeliveryAddress}
                      searchOptions={{
                        location: new window.google.maps.LatLng(37, -122),
                        radius: 4000,
                        types: ['address'],
                        componentRestrictions: { country: 'us' },
                      }}
                      onSelect={(value) => {
                        setDeliveryAddress(value);
                      }}
                      onError={(status, clearSuggestions) => {
                        // console.log(
                        //   'Google Maps API returned error with status: ',
                        //   status
                        // );
                        clearSuggestions();
                      }}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder:
                                'Start typing your current address...',
                              className: 'location-search-input',
                            })}
                          />
                          <div className="autocomplete-dropdown-container">
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion, i) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? '#41b6e6'
                                  : '#fff',
                              };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                  key={i}
                                >
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </ReactDependentScript>
                </div>
                <div className="table-responsive">
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
                          <th>
                            {item.itemRestaurantName}
                            <br />
                            <small>
                              <i>
                                (Delivery Fee ${' '}
                                {
                                  restaurantsList.filter(
                                    (restaurant) =>
                                      restaurant.Name ===
                                      item.itemRestaurantName
                                  )[0].Delivery_Fee
                                }
                                )
                              </i>
                            </small>
                          </th>
                          <td>
                            {item.itemName}
                            <br />
                            <small>
                              <i>(Cost per unit ${item.itemPrice})</i>
                            </small>
                          </td>
                          <td>{item.itemComments}</td>
                          <td>{item.itemCount}</td>
                          <td>
                            <b>
                              &#36;
                              <span>{item.itemCalculatedPrice}</span>
                            </b>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* total box */}
              <div className="card col-md-3 total-box mt-2">
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
                    <span className="float-right">&#36;{cartDeliveryFee}</span>
                  </li>
                  <li className="list-group-item py-2 total-bg font-weight-bold h5">
                    <span className="float-left ">Total</span>
                    <span className="float-right">
                      &#36;
                      {(
                        parseFloat(cartTotal) +
                        parseFloat(0.1 * parseFloat(cartTotal)) +
                        parseFloat(cartDeliveryFee)
                      ).toFixed(2)}
                    </span>
                  </li>
                  <p className="text-muted mt-2 text-center font-italic h6">
                    **Please pay total amount to delivery driver in cash**
                  </p>
                  <p className="text-center"> Delivery Instructions:</p>
                  <textarea
                    className="mb-3 w-100"
                    value={cartDeliveryInstructions}
                    onChange={(e) => {
                      dispatch(setCartDeliveryInstructions(e.target.value));
                    }}
                  />
                  <button
                    type="button"
                    className="btn confirm-order btn-block mx-auto text-white w-75 my-2"
                    onClick={(e) => {
                      if (deliveryAddress === '') {
                        setShowAlert(true);
                      } else {
                        setShowAlert(false);
                        handleOrderCheckout();
                      }
                    }}
                  >
                    <span className="">Confirm Order</span>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        )
      ) : (
        <Redirect to="/sfsulogin" />
      )}
    </>
  );
};

export default Checkout;
