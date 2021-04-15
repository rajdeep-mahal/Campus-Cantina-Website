import React from "react";
import "../assets/css/ownerlayout.css";
import "../index.css";

const OwnerEditProfile = () => {
  return (
    <div class="container-fluid">
      <br />
      <br />
       {/* Header */}
      <div className="text-center">
        <h3> Edit Profile </h3>
      </div>
       {/* form body */}
      <form className="editprofile form-control">
        <input
          className="owner_edit"
          id="redirect_input"
          type="hidden"
          name="redirect"
        />
         {/* restaurant name field           need owner-form class???*/}
        <div className="row">
          <div class="col-8 owner-form">
            <label for="restaurant-name"> Restaurant Name</label>
            <input
              type="text"
              id="restaurant-name"
              required
              class="form-control"
              placeholder="Ex: Sally's Sandwiches"
            />
          </div>
        </div>
        <br />
         {/* name field */}
        <div class="row">
          <div class="col-8">
            <label for="name"> Name </label>
            <div class="w-100" />
            <input
              type="text"
              id="name"
              maxlength="20"
              required
              class="form-control"
              placeholder="John Doe"
              maxLength="50"
            />
          </div>
        </div>
        <br />
         {/* contact field */}
        <div class="row">
        <div class="col-5">
            <label for="phone">Contact Info</label>
            <div class="w-100" />
            <input
              type="tel"
              id="phone"
              class="form-control"
              required
              placeholder="xxx-xxx-xxxx"
              maxlength="10"
            />
          </div>
        </div>
        <br />
         {/* address field */}
        <label for="address">Restaurant Address</label>
        <input
          type="text"
          id="address"
          required
          class="form-control"
          placeholder="123 Street Name"
        />
        <br />
         {/* img field */}
        <label for="img">Restaurant Image</label>
        <input type="file" id="img" class="form-control" />
        <br />
         {/* cuisine field */}
        <label for="food">Cuisine</label>
        <input
          class="form-control"
          type="text"
          id="food"
          required
          placeholder="Ex: American, burgers, etc "
        />
        <br />
         {/* pricing field */}
        <div class="row">
          <div class="col-4">
            <label for="price">Restaurant Pricing</label>
          </div>
          <div class="col">
            <div
              class="btn-group btn-group-toggle price-button"
              data-toggle="buttons"
            >
              <label class="btn btn-secondary active">
                <input type="radio" name="price" autoComplete="off" checked/> $
              </label>
              <label class="btn btn-secondary">
              <input type="radio" name="price" autoComplete="off"/> $$
              </label>
              <label class="btn btn-secondary">
              <input type="radio" name="price" autoComplete="off"/> $$$
              </label>
              <label class="btn btn-secondary">
              <input type="radio" name="price" autoComplete="off"/> $$$$
              </label>
            </div>
          </div>
        </div>
        <br />
        <label for="post">Marketing Post</label>
        <textarea class="form-control" rows="3" placeholder="Announcements" />
        <br />
        <div class="row">
          <div class="col">
            <button
              type="submit"
              class="btn save-btn btn-lg btn-block"
              value="Submit"
            >
              {" "}
              Save{" "}
            </button>
          </div>
          <div class="col">
            <a href="/ownerprofile">
              <button
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                value="Cancel"
              >
                {" "}
                Cancel{" "}
              </button>
            </a>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};

export default OwnerEditProfile;
