// TODO: Retrieve and display images for restaurants from database
//       Retrieve addresses and display with Google Maps API
//       Line when no search results
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

  const handleSearch = () => {
    axios.get('http://localhost:3001/search', {params: {searchTerm: searchTerm, category: selectedCategory}} )
      .then((res) => {
        //console.log(JSON.stringify(res.data));
        setSearchResults(res.data);
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
        <br/>

        {/* Category Dropdown List */}
        <label htmlFor='categoryDropDown'>Category</label>
        <select name='categoryDropDown' id='categoryDropDown' onChange={handleCategory}>
          <option value=''>Select</option>
          {categories.map((category, i) => (
            <option value={category.Category} key={i}>{category.Category}</option>
          ))}
        </select>
        <br/>

        {/* Search Bar */}
        <input type='text' onChange={e => setSearchTerm(e.target.value)}></input>   
        <button onClick={handleSearch}>Search</button>
        <br/>
        <br/>

        {/* Search Results */}
        <div>
            {searchResults.map((item, i) => (
              <p key={i}> <strong>{item.Name}</strong> <br/> {item.Price_Level} • {item.Category}, {item.Tags}</p>
            ))}
        </div>
    </div>
  );
};

export default VPHome;
