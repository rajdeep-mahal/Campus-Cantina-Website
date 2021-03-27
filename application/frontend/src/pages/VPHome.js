// TODO: Validate search terms before sending to backend
//       Optional: Autocomplete / Suggestions in search bar
//       QA testing

import React from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import config from '../config';
import '../assets/css/vphome.css';

const VPHome = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [cuisines, setCuisines] = React.useState([]);
  const [selectedCuisine, setSelectedCuisine] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [noResult, setNoResult] = React.useState('');

  const { loadError } = useLoadScript({
    googleMapsApiKey: config.googleAPI,
  });

  const handleSearch = () => {
    axios
      .get('http://localhost:3001/api/search', {
        params: { searchTerm: searchTerm, cuisine: selectedCuisine },
      })
      .then((res) => {
        if (res.data.length === 0) {
          setSearchResults([]);
          setNoResult('No results found.');
        } else if (res.data === 'Invalid') {
          setSearchResults([]);
          setNoResult('Invalid search entry.');
        } else {
          setSearchResults(res.data);
          setNoResult('');
        }
      });
  };

  const handleCuisine = () => {
    let e = document.getElementById('cuisineDropDown');
    setSelectedCuisine(e.options[e.selectedIndex].value);
  };

  React.useEffect(() => {
    axios.get('http://localhost:3001/api/cuisines').then((res) => {
      setCuisines(res.data);
    });
  }, []);

  return (
    <div style={{}} className="">
      <header className="vp-header text-center align-items-center">
        <div className="container">
          <div className="centered">
            <p className="text-white" style={{ fontSize: 'xx-small' }}>
              SFSU Software Engineering Project CSC 648-848 | Spring 2021 | For
              Demonstration Only
            </p>
          </div>
          <div className="centered text-white">
            <h1 className="h1" style={{ fontWeight: '800' }}>
              VP Home
            </h1>
            <h5 style={{ fontWeight: '700' }}>
              CSC 648 - Team 04 - Spring 2021
            </h5>
            <p style={{ fontSize: 'xx-small' }}>All images are free-use</p>
          </div>
        </div>
      </header>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <div style={{ display: 'flex' }} className="text-center">
              {/* Cuisine Dropdown List */}
              <select
                id="cuisineDropDown"
                onChange={handleCuisine}
                className="custom-select"
                style={{ width: '130px' }}
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
                size="35"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn vp-search-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto">
            {/* Search Results */}
            <br />
            <br />
            <div>
              {searchResults.map((item, i) => (
                <div key={i} className="vp-search-result">
                  <div
                    className="card vp-card vp-shadow container"
                    style={{ marginBottom: '30px' }}
                  >
                    <div style={{ display: 'flex' }}>
                      <img
                        src={
                          'data:image/jpeg;base64,' +
                          new Buffer(item.Small_Pic).toString('base64')
                        }
                        alt=""
                        width="400px"
                        height="250px"
                      />
                      {/* Google Maps */}
                      <GoogleMap
                        mapContainerStyle={{ height: '250px', width: '400px' }}
                        zoom={17}
                        center={{ lat: item.Lat, lng: item.Lng }}
                        options={{
                          streetViewControl: false,
                          mapTypeControl: false,
                        }}
                      >
                        <Marker position={{ lat: item.Lat, lng: item.Lng }} />
                      </GoogleMap>
                      {loadError && (
                        <p>Map cannot be displayed at this time.</p>
                      )}
                    </div>
                    <h6
                      className="text-align-left"
                      style={{ paddingTop: '10px' }}
                    >
                      <strong>{item.Name}</strong>
                      <br />
                    </h6>
                    <p style={{ padding: '0px' }}>
                      {item.Price_Level} • {item.Cuisine}, {item.Tags}
                    </p>
                  </div>
                </div>
              ))}
              {noResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPHome;
