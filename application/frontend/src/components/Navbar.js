import React from "react";
import CCLogo from "../assets/img/CC_Logo.png";
import "../assets/css/navbar.css";

function Navbar() {
  return (
    <>
      <a className="navbar-brand" href="/">
        <img src={CCLogo} alt="logo" width="125" height="65" />
        <span className="navbar-brand mb-0 h1 logo-name text-white">
          Campus Cantina
        </span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle  text-white"
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
              <button
                className="btn navbar-search-btn my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </a>
          </form>
        </li>
        <li className="nav-item d-none d-lg-block d-xl-block">
          <a className="nav-link text-white" href="/about">
            About Us
          </a>
        </li>
        <li className="nav-item d-none d-lg-block d-xl-block">
          <a className="nav-link text-white" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item d-none d-lg-block d-xl-block">
          <a className="nav-link text-white" href="/signup">
            Sign up
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
