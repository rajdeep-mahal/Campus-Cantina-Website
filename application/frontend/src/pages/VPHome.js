// TODO: Retrieve addresses and display with Google Maps API
//       Validate search terms before sending to backend
//       Optional: Autocomplete / Suggestions in search bar
//       Frontend styling
//       QA testing

import React from 'react';
import axios from 'axios';


const VPHome = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [noResult, setNoResult] = React.useState('');

  const handleSearch = () => {
    axios.get('http://localhost:3001/search', {params: {searchTerm: searchTerm, category: selectedCategory}} )
      .then((res) => {
        //console.log(JSON.stringify(res.data));
        if (res.data.length === 0) {
          setSearchResults([]);
          setNoResult('No results found.');
        } else {
          setSearchResults(res.data);
          setNoResult('');
        }
      })
  };

  const handleCategory = () => {
    let e = document.getElementById('categoryDropDown');
    setSelectedCategory(e.options[e.selectedIndex].value);
  }
  
  React.useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then((res) => {
        //console.log(res.data);
        setCategories(res.data)
      })
  }, [])

  return (
    <div style={{padding: '10px'}}>
        <h1>VP Home</h1>
        <h3>CSC 648 <br/> Spring 2021 <br/> Team 04</h3>
        <a href='/about'><h5>About Page</h5></a>
        <p style={{fontSize: '8px'}}>All images are free-use.</p>
        <br/>

        <div style={{display: 'flex'}}>
          {/* Category Dropdown List */}
          <select name='categoryDropDown' id='categoryDropDown' onChange={handleCategory}>
            <option value=''>All Categories</option>
            {categories.map((category, i) => (
              <option value={category.Category} key={i}>{category.Category}</option>
            ))}
          </select>
          
          {/* Search Bar */}
          <input type='text' size='25' onChange={e => setSearchTerm(e.target.value)}></input>   
          <button onClick={handleSearch}>Search</button>
        </div> 

        {/* Search Results */}
        <br/>
        <div>
            {searchResults.map((item, i) => (
              <div key={i} style={{border: '1px solid lightgrey', width: '406px', padding: '2px', marginBottom: '10px'}}>
                <img src={'data:image/jpeg;base64,' + new Buffer(item.Pic1).toString('base64')}
                  alt=''
                  width='400px'
                  height='250px'
                />
                <p><strong>{item.Name}</strong><br/>{item.Price_Level} • {item.Category}, {item.Tags}</p>
              </div>
            ))}
            {noResult}
        </div>
    </div>
  );
};

export default VPHome;
