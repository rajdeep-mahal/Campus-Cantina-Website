import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setSearchResults,
  setSearchedCuisine,
} from '../redux/actions/searchActions';
import { useHistory } from 'react-router-dom';

const CuisineRow = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCuisineSearch = (cuisine) => {
    axios
      .get('http://localhost:3001/api/searchbar/search', {
        params: { searchTerm: '', cuisine: cuisine },
      })
      .then((res) => {
        let element = document.getElementById('root');
        element.scrollIntoView(true);
        dispatch(setSearchedCuisine(cuisine));
        dispatch(setSearchResults(res.data));
      })
      .then(() => {
        history.push('/cuisineresults');
      });
  };
  return (
    <div style={{ border: 'solid 1px grey' }}>
      <h4 className="text-center">Cusines Row</h4>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Burgers')}>Burgers</p>
        </a>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Chinese')}>Chinese</p>
        </a>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Indian')}>Indian</p>
        </a>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Italian')}>Italian</p>
        </a>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Mexican')}>Mexican</p>
        </a>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Pizza')}>Pizza</p>
        </a>
        <a href="#">
          <p onClick={() => handleCuisineSearch('Vietnamese')}>Vietnamese</p>
        </a>
      </div>
    </div>
  );
};

export default CuisineRow;
