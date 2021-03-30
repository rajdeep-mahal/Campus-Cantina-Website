import React from 'react';
import '../assets/css/navbar.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchResults, setNoResult } from '../redux/actions/searchActions';

const Navbar = () => {
  const [cuisines, setCuisines] = React.useState([]);
  const [selectedCuisine, setSelectedCuisine] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const dispatch = useDispatch();

  const handleCuisine = () => {
    let e = document.getElementById('cuisineDropDown');
    setSelectedCuisine(e.options[e.selectedIndex].value);
  };

  const handleSearch = () => {
    axios
      .get('http://localhost:3001/api/search', {
        params: { searchTerm: searchTerm, cuisine: selectedCuisine },
      })
      .then((res) => {
        if (res.data.length === 0) {
          dispatch(setSearchResults([]));
          dispatch(setNoResult('No results found.'));
        } else if (res.data === 'Invalid') {
          dispatch(setSearchResults([]));
          dispatch(setNoResult('Invalid search entry.'));
        } else {
          dispatch(setSearchResults(res.data));
          dispatch(setNoResult(''));
        }
      })
      .then(() => {
        setRedirect(true);
      });
  };

  React.useEffect(() => {
    axios.get('http://localhost:3001/api/cuisines').then((res) => {
      setCuisines(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }} className="text-center">
        {/* Cuisine Dropdown List */}
        <select
          id="cuisineDropDown"
          onChange={handleCuisine}
          className="custom-select"
          style={{ width: '120px' }}
        >
          <option value="">All Cuisines</option>
          {cuisines.map((cuisine, i) => (
            <option value={cuisine.Cuisine} key={i}>
              {cuisine.Cuisine}
            </option>
          ))}
        </select>
        {/* Search Bar */}
        <input
          id="searchInput"
          type="text"
          className="form-control"
          style={{ width: '300px' }}
          size="30"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Search Button */}
        <div className="input-group-append">
          <button className="btn nav-search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
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
      {redirect && (
        <Redirect to='/searchresults'/>
      )}
    </>
  );
};

export default Navbar;
