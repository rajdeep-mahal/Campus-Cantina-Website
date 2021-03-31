import React from 'react';
import '../assets/css/menu_sidebar.css';
import { Link } from 'react-router-dom';
import CCLogo from '../assets/img/CC_Logo.png';

const TopBarNoMenu = () => {
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
          
            <i 
            style={{ color: '#552583' }}
            className="fas fa-bars hamburger h3"></i>
         
        </div>
        <Link to="/home" className="campus-home-link">
        <div className="mx-auto text-center" style={{ display: 'flex' }}>
          <img src={CCLogo} alt="logo" height="45" className="logopic" />
          <h3 className="campus">campus cantina</h3>
        </div>
        </Link>
        <div style={{ paddingLeft: '10px' }}>
       
            <i className="fas fa-shopping-cart h3" style={{ color: '#552583' }} />
       
        </div>
      </div>
    </>
  );
};

export default TopBarNoMenu;
