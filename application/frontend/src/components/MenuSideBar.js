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
      <div className="navbar navbar-expand-lg justify-content-start">
        <Link to="#">
          <i
            className="fas fa-bars text-white h2 mx-3 mt-1"
            onClick={showMenu}
          ></i>
        </Link>
        <Navbar />
      </div>
      <nav
        className={menu ? "side-menu open text-white" : "side-menu text-white"}
      >
        <div className="cc-logo-bg container-fluid d-flex flex-wrap justify-content-center pt-2">
          <a href="/home">
            <img
              src={CCLogo}
              alt="logo"
              width="180"
              height="100"
              className="rounded-circle side-logo-img p-1"
            />
          </a>
        </div>
        <ul className="navbar-nav">
          <li className="px-3 pt-1" onClick={showMenu}>
            <Link to="#">
              <i className=" fas fa-times text-white float-right h4"></i>
            </Link>
          </li>

          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="menu-item p-2 m-2">
                <Link to={item.path}>
                  <i className={item.cName} />
                  {index === 4 ? (
                    <>
                      <span className="side-menu-text p-2 m-1 h5">
                        {item.title}
                      </span>
                      <br />
                      <span className="text-white p-2 m-5 h5">
                        --Partner with us
                      </span>
                    </>
                  ) : index === 5 ? (
                    <>
                      <span className="side-menu-text p-2 m-1 h5">
                        {item.title}
                      </span>
                      <br />
                      <span className="text-white p-2 m-5 h5">
                        --Signup to Deliver
                      </span>
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
            <span className="text-white ml-2">
              Campus Cantina CSC648/848 Team 04 Spring 2021
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MenuSideBar;
