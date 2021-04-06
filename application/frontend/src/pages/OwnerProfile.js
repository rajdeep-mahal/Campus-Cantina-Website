import React from "react";
import restaurantcartoon from "../assets/img/restaurant_ex.jpeg";
import "../index.css";

const OwnerProfile = () => {
  return (
    <div className="container-fluid">
      <br />
      <div className="text-center">
        <h1>Profile</h1>
      </div>
      <div className="editprofile">
        <div class="alert alert-warning text-center" role="alert">
          {" "}
          PENDING ADMIN APPROVAL WITHIN 24 HOURS{" "}
        </div>
        <div className="border-bottom my-3">
          <div className="row">
            <div class="col-7">
              <label for="name"> Bob's Burgers</label>
            </div>
            <div class="col">
              <label for="name"> American, Burger, $</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <img
              src={restaurantcartoon}
              class="rounded img-fluid"
              alt="Restaurant Img"
            />
          </div>
        </div>
        <br />
        <div class="profile-content border">
          <div class="row">
            <br />
            <div class="col">
              <label className="form-descrip"> Restaurant Owner</label>
            </div>
            <div class="col-8">
              <label for="name"> Bob Jones </label>
            </div>
          </div>
          <div class="row ">
            <div class="col">
              <label className="form-descrip">Contact </label>
            </div>
            <div class="col-8">
              <label for="phone">(415)555-5555</label>
            </div>
          </div>
          <div class="row ">
            <div class="col">
              <label className="form-descrip">Restaurant Address</label>
            </div>
            <div class="col-8">
              <label for="phone">562 Random St, San Francisco, CA 94123</label>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label className="form-descrip">Marketing Post</label>
            </div>
            <div class="col-8">
              <label>Save $5 on first 5 orders! </label>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div class="col">
          <a href="/ownereditprofile">
            <button
              type="submit"
              class="btn btn-secondary btn-lg btn-block"
              value="Cancel"
            >
              {" "}
              Edit{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
