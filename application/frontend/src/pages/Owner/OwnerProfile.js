import React from "react";
//import restaurantcartoon from "../../assets/img/restaurant_ex.jpeg";
import axios from "axios";
import "../../assets/css/index.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OwnerProfile = () => {
  const [ownerInfo, setOwnerInfo] = useState([]);

  //restaurants from backend
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  const currentRestaurant = restaurantsList.filter(
    (restaurant) => restaurant.Name.trim() === "Taco Shell"
  );

  const [loadData, setLoadData] = useState(false);

  //Renders owner info from DB
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/restaurant/owner-info", {
        params: { ownerEmail: "marshall.herrera@example.com" },
      })
      .then((res) => {
        setOwnerInfo(res.data);
        setLoadData(false);
      });
  }, [loadData]);

  //extract value from global redux (reads from store)
  return (
    <div className="container-fluid">
      <br />
      {currentRestaurant.map((item, index) => (
        <>
          <div className="text-center">
            <h3 className="owner-heading"> Profile </h3>
          </div>
          <div className="editprofile" key={index}>
            {/* content header */}
            <div className="border-bottom text-left">
              {" "}
              <h3>
                <strong>{item.Name}</strong>
              </h3>
            </div>

            {/* content body */}
            {ownerInfo.map((ownerItem, i) => (
              <div class="profile-content" key={i}>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Restaurant Owner</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="name"> {ownerItem.Name}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Contact</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="phone">{ownerItem.Phone}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Email</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="email">{ownerItem.Email}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Restaurant Address</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="address">{item.Address}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Cuisine</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="address">{item.Cuisine}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Restaurant Tags</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="address">{item.Tags}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label className="form-descrip">
                      <strong>Price Level</strong>
                    </label>
                  </div>
                  <div class="col">
                    <label for="address">{item.Price_Level}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default OwnerProfile;
