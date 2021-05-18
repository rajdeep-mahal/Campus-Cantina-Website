/*
Summary of MenuSideBar.js: 
 - renders with '/' in React Application
 - On top of all routes and hence displays on all pages of the application
 - Components: Logo, Search Bar, Cart, Side bar menu (based on logged in user)
*/
import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/menu_sidebar.css';
import { Link, useHistory } from 'react-router-dom';
import { GuestMenuItems } from './GuestMenuItems';
import { OwnerMenuItems } from './OwnerMenuItems';
import { DriverMenuItems } from './DriverMenuItems';
import { SFSUMenuItems } from './SFSUMenuItems';
import { useSelector } from 'react-redux';
import CCLogo from '../assets/img/CC_Logo.png';
import SearchBar from '../components/SearchBar';
import CustomerCart from '../pages/CustomerCart';

const MenuSideBar = () => {
  const history = useHistory();
  // state variables
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  // redux state variables
  const cartItemsTotalCount = useSelector(
    (state) => state.cartItemsReducer.cartItemsTotalCount
  );
  // global user state variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  // deduce user role and the menu items based on the role
  let MenuItems = [];
  if (appUser.type === 'customer') MenuItems = SFSUMenuItems;
  else if (appUser.type === 'owner') MenuItems = OwnerMenuItems;
  else if (appUser.type === 'driver') MenuItems = DriverMenuItems;
  else MenuItems = GuestMenuItems;

  const showMenu = () => setMenu(!menu);
  const showCart = () => setCart(!cart);
  const ref = useRef(null);
  const handleClickOutsideMenu = (event) => {
    if (!ref.current.contains(event.target)) {
      showMenu();
    }
  };
  const handleClickOutsideCart = (event) => {
    if (!ref.current.contains(event.target)) {
      showCart();
    }
  };
  useEffect(() => {
    if (menu) {
      document.addEventListener('click', handleClickOutsideMenu);
      return () => {
        document.removeEventListener('click', handleClickOutsideMenu);
      };
    }
    if (cart) {
      document.addEventListener('click', handleClickOutsideCart);
      return () => {
        document.removeEventListener('click', handleClickOutsideCart);
      };
    }
  });

  return (
    <>
      <div className="primary-color secondary-color-bg text-center disclaimer">
        <span>
          SFSU Software Engineering Project CSC 648/848 | Spring 2021 | For
          Demonstration Only
        </span>
      </div>
      <div className="navbar sticky-top flex-nowrap">
        <section className="pt-2 col-md-3">
          <div className="row">
            <i
              className="fas fa-bars text-white h4 hamburger"
              onClick={showMenu}
            ></i>
            <Link to="/" className="" style={{ marginLeft: '10px' }}>
              <img
                src={CCLogo}
                alt="logo"
                height="40"
                className="logo-pic"
                style={{ marginLeft: '0px' }}
              />
            </Link>
            <div style={{ marginTop: '-6px' }}>
              <Link to="/" className="campus-home-link">
                <span className="campus text-white h4">campus cantina</span>
              </Link>
            </div>
          </div>
        </section>
        <div className="col-md-5">
          <div className="msb-searchbar pb-1">
            <SearchBar />
          </div>
          <div
            className="text-center"
            style={{ width: '200px', marginTop: '-5px' }}
          >
            <Link to="/" className="campus-home-link">
              <span className="second-campus text-white h4">
                campus cantina
              </span>
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex justify-content-around">
            {/* conditional rendering based on the logged in user's role */}
            {appUser.type === 'guest' ? (
              <>
                <Link to="/sfsulogin" className="d-none d-xl-block text-center">
                  <button className="btn secondary-color-bg primary-color nav-btn-container ">
                    <i className="fas fa-sign-in-alt h5 primary-color" />
                  </button>
                  <p className="lblIconText">SFSU Login</p>
                  <p className="lblIconText1">Login</p>
                </Link>
                <Link
                  to="/ownerlogin"
                  className="d-none d-xl-block text-center"
                >
                  <button className="btn secondary-color-bg primary-color nav-btn-container ">
                    <i className="fas fa-utensils h5 primary-color" />
                  </button>
                  <p className="lblIconText">Owner Login</p>
                  <p className="lblIconText1">Owner</p>
                </Link>
                <Link
                  to="/driverlogin"
                  className="d-none d-xl-block text-center"
                >
                  <button className="btn secondary-color-bg primary-color nav-btn-container ">
                    <i className="fas fa-biking h5 primary-color" />
                  </button>
                  <p className="lblIconText">Driver Login</p>
                  <p className="lblIconText1">Driver</p>
                </Link>
                <div className="text-center">
                  <button
                    className="btn secondary-color-bg primary-color nav-btn-container"
                    onClick={showCart}
                  >
                    <div style={{ display: 'flex' }}>
                      <i className="fas fa-shopping-cart h5 primary-color" />
                      <div style={{ marginTop: '-5px', marginLeft: '2px' }}>
                        <span className="badge badge-light">
                          {cartItemsTotalCount}
                        </span>
                      </div>
                    </div>
                  </button>
                  <p className="lblCartText">Cart</p>
                </div>
              </>
            ) : appUser.type === 'customer' ||
              appUser.type === 'owner' ||
              appUser.type === 'driver' ? (
              <>
                <p className="h6 secondary-color text-center my-auto d-none d-xl-block">
                  <b>Hello, {appUser.name}</b>
                </p>
                <div className="text-center d-none d-xl-block">
                  <button
                    className="btn secondary-color-bg primary-color nav-btn-container"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#signout"
                  >
                    <i className="fas fa-sign-out-alt h5 primary-color" />
                  </button>
                  <p className="lblCartText">Signout</p>
                </div>
                <div className="text-center">
                  <button
                    className="btn secondary-color-bg primary-color nav-btn-container"
                    onClick={showCart}
                  >
                    <div style={{ display: 'flex' }}>
                      <i className="fas fa-shopping-cart h5 primary-color" />
                      <div style={{ marginTop: '-5px', marginLeft: '2px' }}>
                        <span className="badge badge-light">
                          {cartItemsTotalCount}
                        </span>
                      </div>
                    </div>
                  </button>
                  <p className="lblCartText">Cart</p>
                </div>
              </>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
      <div className="navbar second-nav">
        <div className="row mx-auto">
          <div className="col mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <nav
        className={menu ? 'side-menu open text-white' : 'side-menu text-white'}
        ref={ref}
      >
        <ul className="navbar-nav">
          <li className="nav-item" onClick={showMenu}>
            <Link to="#">
              <i className="nav-link fas fa-times primary-color float-right h4 m-3"></i>
            </Link>
          </li>

          {/* Welcome Message */}
          <div className="secondary-color-bg pt-2">
            <p className="h4 primary-color ml-4">
              <b>Hello, {appUser.name}</b>
            </p>
          </div>

          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="menu-item p-2 m-2" onClick={showMenu}>
                {item.path !== '/signout' ? (
                  <Link to={item.path}>
                    <i className={item.cName} style={{ width: '10px' }} />
                    <span className="side-menu-text primary-color p-2 m-1 ml-3 h5">
                      {item.title}
                    </span>
                  </Link>
                ) : item.path === '/signout' ? (
                  <Link
                    to="#"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#signout"
                  >
                    <i className={item.cName} style={{ width: '10px' }} />
                    <span className="side-menu-text primary-color p-2 m-1 ml-3 h5">
                      {item.title}
                    </span>
                  </Link>
                ) : (
                  <> </>
                )}
              </li>
            );
          })}
          <li
            className="small mr-1 text-center copytext"
            style={{ fontSize: '10px' }}
          >
            <i className="fas fa-copyright text-muted pr-1 "></i>
            <span className="text-muted">
              Campus Cantina | CSC648/848 Team 04 | Spring 2021 <br />
              All images free-use
            </span>
          </li>
        </ul>
      </nav>

      {/* Cart */}
      <nav className={cart ? 'cart open' : 'cart'} ref={ref}>
        <div className="navbar-nav">
          <li className="pt-1 pl-2" onClick={showCart}>
            <Link to="#">
              <i className="nav-link fas fa-times primary-color float-left h4"></i>
            </Link>
          </li>
          <CustomerCart />
        </div>
        <br />
      </nav>

      {/* signout modal */}
      <div
        className="modal fade"
        id="signout"
        role="dialog"
        aria-labelledby="signoutLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header h5">
              <strong> Sign Out </strong>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal-edit">
              <p className="h4 primary-color mb-4"> Are you sure? </p>
              <div className="d-flex justify-contents-center">
                <button
                  type="button"
                  className="btn save-btn btn-lg btn-block primary-color text-center m-1 signout-buttons"
                  data-dismiss="modal"
                  onClick={(e) => history.push('/signout')}
                >
                  Yes
                </button>
                <button
                  type="submit"
                  className="btn save-btn btn-lg btn-block m-1 primary-color"
                  value="Submit"
                  data-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
