import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setSearchResults,
  setSearchedCuisine,
} from '../redux/actions/searchActions';
import { useHistory } from 'react-router-dom';
import '../assets/css/cuisines.css';
import Burger from '../assets/img/cuisines/Burger.png';
import Chinese from '../assets/img/cuisines/Chinese.png';
import Indian from '../assets/img/cuisines/Indian.png';
import Italian from '../assets/img/cuisines/Italian.png';
import Mexican from '../assets/img/cuisines/Mexican.png';
import Pizza from '../assets/img/cuisines/Pizza.png';
import Vietnamese from '../assets/img/cuisines/Vietnamese.png';

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
    <div className="container">
      <h2 className="cuisine-section-heading">Cuisines</h2>
      <div className=" d-flex flex-wrap cuisine-section mt-2">
        <a
          href="#"
          onClick={() => handleCuisineSearch('Burgers')}
          className="shadow cuisine-link"
        >
          <img src={Burger} alt="logo" height="55" className="" />
          <p>Burgers</p>
        </a>
        <a
          href="#"
          onClick={() => handleCuisineSearch('Chinese')}
          className="cuisine-link"
        >
          <img
            src={Chinese}
            alt="logo"
            height="65"
            className="chinese-cuisine"
          />
          <p>Chinese</p>
        </a>
        <a
          href="#"
          onClick={() => handleCuisineSearch('Indian')}
          className="cuisine-link"
        >
          <img src={Indian} alt="logo" height="55" className="" />
          <p>Indian</p>
        </a>
        <a
          href="#"
          onClick={() => handleCuisineSearch('Italian')}
          className="cuisine-link"
        >
          <img src={Italian} alt="logo" height="55" className="" />
          <p>Italian</p>
        </a>
        <a
          href="#"
          onClick={() => handleCuisineSearch('Mexican')}
          className="cuisine-link"
        >
          <img src={Mexican} alt="logo" height="55" className="" />
          <p>Mexican</p>
        </a>
        <a
          href="#"
          onClick={() => handleCuisineSearch('Pizza')}
          className="cuisine-link"
        >
          <img src={Pizza} alt="logo" height="55" className="" />
          <p>Pizza</p>
        </a>
        <a
          href="#"
          onClick={() => handleCuisineSearch('Vietnamese')}
          className="cuisine-link"
        >
          <img src={Vietnamese} alt="logo" height="55" className="" />
          <p>Vietnamese</p>
        </a>
      </div>
    </div>
  );
};

export default CuisineRow;
