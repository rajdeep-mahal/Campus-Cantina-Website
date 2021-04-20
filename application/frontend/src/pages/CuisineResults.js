import React from 'react';
import '../assets/css/vphome.css';
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

        <CuisineRow />
        <ButtonsRow />
        <br />

        {searchResults.map((item, i) => (
          <div key={i}>
            <div className="card vp-card vp-shadow p-1 mb-4">
              <div className="d-flex">
                <img
                  className=""
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Display_Pic_Thumbnail).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
                <img
                  className="d-none d-sm-none d-md-block"
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Display_Pic_Thumbnail).toString('base64')
                  }
                  alt=""
                  width="350px"
                  height="250px"
                />
              </div>
              <h5 className="text-align-left pt-2 pl-1">
                <strong>{item.Name}</strong>
                <br />
              </h5>
              <div style={{ marginBottom: '-5px' }}>
                <p className="text-muted p-0 pl-1 ">
                  {item.Price_Level} • {item.Cuisine}, {item.Tags}
                  <p className="float-right pr-1 rest-desc-text">
                    Free Delivery
                  </p>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisineResults;
