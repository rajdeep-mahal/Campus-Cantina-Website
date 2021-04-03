import React, { useState } from 'react';
import '../assets/css/menu_sidebar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import CCLogo from '../assets/img/CC_Logo.png';
import SearchBar from '../components/SearchBar';

const MenuSideBar = () => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const showMenu = () => setMenu(!menu);
  const showCart = () => setCart(!cart);

  return (
    <>
      <div className="primary-color secondary-color-bg text-center small">
        <span>
          SFSU Software Engineering Project CSC 648/848 | Spring 2021 | For
          Demonstration Only
        </span>
      </div>
      <div className="navbar sticky-top navbar-expand-lg justify-content-between align-items-center">
        <section>
          <Link to="#">
            <i className="fas fa-bars text-white h4" onClick={showMenu}></i>
          </Link>
          <Link to="/" className="ml-3 mr-1">
            <img src={CCLogo} alt="logo" height="45" width="50" className="" />
          </Link>
          <Link to="/" className="campus-home-links">
            <span className="campus text-white h4">campus cantina</span>
          </Link>
        </section>
        <div className="pt-2">
          <SearchBar />
        </div>
        <div className="p-1 m-1 cart-float secondary-color-bg rounded">
          <Link to="#">
            <i
              className="fas fa-shopping-cart primary-color h4 my-2"
              onClick={showCart}
            ></i>
            <span className="badge badge-pill bg-white primary-color m-1">
              5
            </span>
          </Link>
        </div>
      </div>

      {/* Side Menu */}
      <nav
        className={menu ? 'side-menu open text-white' : 'side-menu text-white'}
      >
        <ul className="navbar-nav">
          <li className="nav-item" onClick={showMenu}>
            <Link to="#">
              <i className="nav-link fas fa-times primary-color float-right h4 m-3"></i>
            </Link>
          </li>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="menu-item p-2 m-2 " onClick={showMenu}>
                <Link to={item.path}>
                  <i className={item.cName} />
                  <span className="side-menu-text primary-color p-2 m-1 h5">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="small mr-1 text-center copytext">
            <i className="fas fa-copyright text-muted pr-1"></i>
            <span className="text-muted">
              Campus Cantina CSC648/848 Team 04 Spring 2021
            </span>
          </li>
        </ul>
      </nav>

      {/* Cart */}
      <nav className={cart ? 'cart open' : 'cart'}>
        <ul className="navbar-nav">
          <li className="px-3 pt-1" onClick={showCart}>
            <Link to="#">
              <i className="nav-link fas fa-times primary-color float-left h4 my-3"></i>
            </Link>
          </li>
          <li>
            <br />
            <span className="primary-color p-2 m-1 h5">Your Cart is empty</span>
            <p className="primary-color p-2 m-1">Add items to get started</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuSideBar;
