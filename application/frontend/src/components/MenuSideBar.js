import React, { useState } from "react";
import "../assets/css/menu_sidebar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Navbar from "./Navbar";
import CCLogo from "../assets/img/CC_Logo.png";

const MenuSideBar = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);
  return (
    <>
      <div className="navbar-header text-center" style={{fontSize: '10px', color: 'grey'}}>
        <span>
          SFSU Software Engineering Project CSC 648/848 | Spring 2021 | For
          Demonstration Only
        </span>
      </div>
      <div className="navbar navbar-expand-md navbar-align">
        <div>
          <Link to="#">
            <i className="fas fa-bars text-white h3" onClick={showMenu}></i>
          </Link>
        </div>
          <div className="text-center mx-auto" style={{display: 'flex'}}>
          {/* <a className="navbar-brand" href="/"> */}
            <img src={CCLogo} alt="logo" height="45" />
            <h2 className="campus">campus cantina</h2>
          {/* </a> */}
          </div>
          <div>
          <i class="fas fa-shopping-cart text-white h3"></i>
          </div>
        
        
      </div>
      {/* <Navbar /> */}
      <div className="second-bar">
      <Navbar />
      </div>
      
      <nav
        className={menu ? "side-menu open text-white" : "side-menu text-white"}
      >
        {/* <div className="cc-logo-bg container-fluid d-flex flex-wrap justify-content-center pt-2 pb-1">
          <a href="/home">
            <img
              src={CCLogo}
              alt="logo"
              width="180"
              height="100"
              className="rounded-circle side-logo-img p-1"
            />
          </a>
        </div> */}
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
          <li className="small pt-5 m-4 text-center">
            <i className="fas fa-copyright"></i>
            <span style={{color: "gray"}}>
              Campus Cantina CSC648/848 Team 04 Spring 2021
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MenuSideBar;
