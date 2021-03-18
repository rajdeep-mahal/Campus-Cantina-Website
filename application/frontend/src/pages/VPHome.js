// TODO: Validate search terms before sending to backend
//       Optional: Autocomplete / Suggestions in search bar
//       Frontend styling
//       QA testing

import React from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config';

const VPHome = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [cuisines, setCuisines] = React.useState([]);
  const [selectedCuisine, setSelectedCuisine] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [noResult, setNoResult] = React.useState('');

  const handleSearch = () => {
    axios
      .get('http://localhost:3001/search', {
        params: { searchTerm: searchTerm, cuisine: selectedCuisine },
      })
      .then((res) => {
        if (res.data.length === 0) {
          setSearchResults([]);
          setNoResult('No results found.');
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
    axios.get('http://localhost:3001/cuisines').then((res) => {
      setCuisines(res.data);
    });
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <h1>VP Home</h1>
      <h3>
        CSC 648 <br /> Spring 2021 <br /> Team 04
      </h3>
      {/* <a href='/about'>
        <h5>About Page</h5>
      </a> */}
      <p style={{ fontSize: '8px' }}>All images are free-use.</p>
      <br />

      <div style={{ display: 'flex' }}>
        {/* Cuisine Dropdown List */}
        <select
          id='cuisineDropDown'
          onChange={handleCuisine}
        >
          <option value=''>All Cuisines</option>
          {cuisines.map((cuisine, i) => (
            <option value={cuisine.Cuisine} key={i}>
              {cuisine.Cuisine}
            </option>
          ))}
        </select>
        {/* Search Bar */}
        <input
          id='searchInput'
          type='text'
          size='25'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Search Results */}
      <br />
      <div>
        {searchResults.map((item, i) => (
          <div
            key={i}
            style={{
              border: '1px solid grey',
              width: '406px',
              padding: '2px',
              marginBottom: '15px',
            }}
          >
            <img
              src={
                'data:image/jpeg;base64,' +
                new Buffer(item.Pic1).toString('base64')
              }
              alt=''
              width='400px'
              height='250px'
            />
            <p>
              <strong>{item.Name}</strong>
              <br />
              {item.Price_Level} • {item.Cuisine}, {item.Tags}
            </p>
            {/* Google Maps */}
            <LoadScript
              googleMapsApiKey={config.googleAPI}
            >
              <GoogleMap
                mapContainerStyle={{ height: '250px', width: '400px' }}
                zoom={17}
                center={{ lat: item.Lat, lng: item.Lng }}
              >
                <Marker position={{ lat: item.Lat, lng: item.Lng }} />
              </GoogleMap>
            </LoadScript>
          </div>
        ))}
        {noResult}
      </div>
    </div>
  );
};

export default VPHome;
