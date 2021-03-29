import React from "react";
import "../assets/css/navbar.css";
function Navbar() {
  return (
    <>
      <ul className="navbar-nav search-bar-align">
        <li className="nav-item dropdown h6 pt-lg-2 pt-xl-2 pt-md-2">
          <a
            className="nav-link dropdown-toggle text-white"
            href="/"
            id="navbardrop"
            data-toggle="dropdown"
          >
            All Cuisines
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">
              Mexican
            </a>
            <a className="dropdown-item" href="/">
              Italian
            </a>
            <a className="dropdown-item" href="/">
              Chinese
            </a>
          </div>
        </li>
        <li className="nav-item">
          <form className="form-inline">
            <input
              className="nav-search form-control mr-sm-2"
              type="search"
              aria-label="Search"
              name="search"
              placeholder="Search ..."
            />
            <a href="/search">
              <button className="btn navbar-search-btn my-2" type="submit">
                Search
              </button>
            </a>
          </form>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item d-none h6 d-lg-none d-xl-block">
          <a className="nav-link text-white" href="/about">
            <i className="fas fa-users mr-1 nav-menu-icon" />
            About Us
          </a>
        </li>
        <li className="nav-item d-none h6 d-lg-none d-xl-block">
          <a className="nav-link text-white" href="/login">
            <i className="fas fa-sign-in-alt mr-1 nav-menu-icon" />
            Login
          </a>
        </li>
        <li className="nav-item d-none h6 d-lg-none d-xl-block">
          <a className="nav-link text-white" href="/signup">
            <i className="fas fa-user-plus mr-1 nav-menu-icon" />
            Sign up
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
