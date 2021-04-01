import React from 'react';
import '../assets/css/searchbar.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchResults, setNoResult } from '../redux/actions/searchActions';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [cuisines, setCuisines] = React.useState([]);
  const [selectedCuisine, setSelectedCuisine] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCuisine = () => {
    let e = document.getElementById('cuisineDropDown');
    setSelectedCuisine(e.options[e.selectedIndex].value);
  };

  const handleSearch = () => {
    axios
      .get('http://localhost:3001/api/searchbar/search', {
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
        history.push('/searchresults');
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  React.useEffect(() => {
    axios.get('http://localhost:3001/api/searchbar/cuisines').then((res) => {
      setCuisines(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto">
          <div style={{ display: 'flex' }} className="text-center container">
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
              style={{ width: '250px' }}
              size="30"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            {/* Search Button */}
            <div className="input-group-append">
              <button className="btn nav-search-btn" onClick={handleSearch}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
