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
      <div className="navbar-header text-center">
        <span>
          SFSU Software Engineering Project CSC 648/848 | Spring 2021 | For
          Demonstration Only
        </span>
      </div>
      <div className="navbar sticky-top navbar-expand-lg">
        <div className="nav-left">
          <Link to="#">
            <i
              className="fas fa-bars text-white hamburger h4"
              onClick={showMenu}
            ></i>
          </Link>
        </div>
        <div>
          <div className="mx-auto text-center" style={{ display: 'flex' }}>
            <img src={CCLogo} alt="logo" height="50" className="logopic" />
            <Link to="/" className="campus-home-link">
              <h4 className="campus">campus cantina</h4>
            </Link>
          </div>
        </div>
        <div className="nav-center">
          <SearchBar />
        </div>
        <div className="nav-right">
          <Link to="#">
            <i
              className="fas fa-shopping-cart text-white h4"
              onClick={showCart}
            ></i>
          </Link>
        </div>
      </div>
      {/* Side Menu */}
      <nav
        className={menu ? 'side-menu open text-white' : 'side-menu text-white'}
      >
        <ul className="navbar-nav">
          <li className="px-3 pt-1" onClick={showMenu}>
            <Link to="#">
              <i className=" fas fa-times close float-right h4"></i>
            </Link>
          </li>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="menu-item p-2 m-2 " onClick={showMenu}>
                <Link to={item.path}>
                  <i className={item.cName} />
                  {index === 4 ? (
                    <>
                      <span className="side-menu-text p-2 m-1 h5">
                        {item.title}
                      </span>
                      <br />
                    </>
                  ) : index === 5 ? (
                    <>
                      <span className="side-menu-text p-2 m-1 h5">
                        {item.title}
                      </span>
                      <br />
                    </>
                  ) : (
                    <>
                      <span className="side-menu-text p-2 m-1 h5">
                        {item.title}
                      </span>
                    </>
                  )}
                </Link>
              </li>
            );
          })}
          <li className="small pt-5 m-4 text-center copytext">
            <i className="fas fa-copyright"></i>
            <span style={{ color: 'gray' }}>
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
              <i className=" fas fa-times close float-left h4"></i>
            </Link>
          </li>
          <li>
            <br />
            <span className="cart-text p-2 m-1 h5">Your Cart is empty</span>
            <p className="cart-text p-2 m-1">Add items to get started</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuSideBar;
