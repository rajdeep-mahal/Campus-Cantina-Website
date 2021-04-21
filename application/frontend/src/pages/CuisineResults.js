import React from 'react';
//  import '../assets/css/vphome.css';
import '../assets/css/home.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CuisineRow from '../components/CuisineRow';
import ButtonsRow from '../components/ButtonsRow';

const CuisineResults = () => {
  const searchResults = useSelector(
    (state) => state.searchReducer.searchResults
  );
  const searchedCuisine = useSelector(
    (state) => state.searchReducer.searchedCuisine
  );

  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <div>
          <h4 className="pt-3 text-center" style={{ fontWeight: '800' }}>
            {searchedCuisine}
          </h4>

          {searchResults.length === 1 ? (
            <p className="text-center  pr-2 primary-color">1 STORE NEARBY</p>
          ) : (
            <p className="text-center  pr-2 primary-color">
              {searchResults.length} STORES NEARBY
            </p>
          )}
        </div>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <h5 className="text-center">
            <i class="fas fa-chevron-left h6 "></i> Back
          </h5>
        </Link>
        <div style={{ width: '80vw' }}>
          <CuisineRow />
        </div>

        <br />
        <div className=" container d-flex justify-content-around flex-wrap mt-4">
          {searchResults.map((item, i) => (
            <div key={i}>
              <div className="card home-restaurant-card ml-2">
                <img
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Display_Pic_Thumbnail).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
                <div className="row">
                  <div className="col">
                    <h5 className="text-align-left ml-2">
                      <strong>{item.Name}</strong>
                    </h5>
                  </div>
                  <div className="col">
                    <p className="float-right mr-2">Free Delivery</p>
                  </div>
                </div>
                <div className="restaurants-price-tags">
                  <span className="text-muted ml-2">
                    {item.Price_Level} • {item.Cuisine}, <br />
                    <span className="text-muted ml-2">{item.Tags}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisineResults;
