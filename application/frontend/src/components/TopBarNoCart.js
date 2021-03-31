import React, { useState } from 'react';
import '../assets/css/menu_sidebar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import CCLogo from '../assets/img/CC_Logo.png';

const TopBarNoCart = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  return (
    <>
      <div
        className="navbar-header text-center"
        style={{ fontSize: '10px', color: 'grey' }}
      >
        <span>
          SFSU Software Engineering Project CSC 648/848 | Spring 2021 | For
          Demonstration Only
        </span>
      </div>
      <div className="navbar navbar-expand-md navbar-align">
        <div>
          <Link to="#">
            <i className="fas fa-bars text-white hamburger h3" onClick={showMenu}></i>
          </Link>
        </div>
        <Link to="/home" className="campus-home-link">
          <div className="mx-auto text-center" style={{ display: 'flex' }}>
            <img src={CCLogo} alt="logo" height="45" className="logopic" />
            <h3 className="campus">campus cantina</h3>
          </div>
        </Link>
        <div style={{ paddingLeft: '10px' }}>
          <i
            style={{ color: '#552583' }}
            className="fas fa-shopping-cart h3"
          ></i>
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
    </>
  );
};

export default TopBarNoCart;
