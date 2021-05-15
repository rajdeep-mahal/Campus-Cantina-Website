import React from "react";
import "../../assets/css/ownerlayout.css";
import "../../assets/css/index.css";

const OwnerEditProfile = () => {
  return (
    <div class="container-fluid">
      <br />
      {/* Header */}
      <div className="text-center">
        <h3 className="owner-heading"> Edit Profile </h3>
      </div>
      {/* form content*/}
      <form className="editprofile form-control">
        <input
          className="profile-input"
          id="redirect-input"
          type="hidden"
          name="redirect"
        />

        <br />
        <div class="row">
          <div class="col-8">
            <label for="name">
              {" "}
              <strong>Name</strong>
            </label>
            <div class="w-100" />
            <input
              type="text"
              id="name"
              maxlength="20"
              required
              class="form-control"
              placeholder="John Doe"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-5">
            <label for="phone">
              <strong>Contact Info</strong>
            </label>
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
        <div class="row">
          <div class="col-8">
            <label for="name">
              {" "}
              <strong>Email</strong>
            </label>
            <div class="w-100" />
            <input
              type="email"
              maxlength="30"
              required
              class="form-control"
              placeholder="email@address.com"
            />
          </div>
        </div>



        <br />
        {/* footer buttons */}
        <div class="row p-b-3">
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
            <a class="text-white cancel-btn" href="/owner/profile">
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
