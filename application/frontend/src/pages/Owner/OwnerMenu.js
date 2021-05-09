import React, { useState } from "react";
import "../../assets/css/about_individual.css";
import Banner from "../../assets/img/restaurant/Restaurant_Banner.jpg";
import { useSelector, useDispatch } from 'react-redux';

/*
Put all owner menu items in a list (react useState -> List, no need of redux).. and map through the list to display in the table.  - German
when adding an item, it is added to the list..
It should be automatically displayed on the page after adding
Same is the case with Update. Menu item to be updated automatically when clicked on update in the modal
added menu item to be sent to the backend.
*/

const OwnerMenu = () => {

  const dispatch = useDispatch(); //necessary?

  //function to add to an array
    const [items, setItems] = useState([]);
    const [menuName, setMenuName] = useState("");
    const [menuPrice, setMenuPrice] = useState("");
    const [menuDescrip, setMenuDescrip] = useState("");
    //const [menuUpdate, setMenuUpdate] = useState('false');
  
    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: menuName,
          price: menuPrice,
          descrip: menuDescrip
        }
      ]);
      setMenuName("");
      setMenuPrice("");
      setMenuDescrip("");
    };

  {
    /* Renders each row for Menu Table */
  }
  const renderMenuItem = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.descrip}</td>
        <td>
          <i
            className="fas fa-pen menu-icon "
            aria-hidden="true"
            data-toggle="modal"
            data-target="#editItem"
          />
        </td>
        <td>
          <i className="fas fa-trash menu-icon" aria-hidden="true" />
        </td>
      </tr>
    );
  };

  return (
    <div className="container-fluid ">
      <div className="mx-5">
        <img className="w-100 restaurantBanner" src={Banner} />
        <div className="container">
          <div className="pl-1">
            <br />
            {/* alert banners */}
            <div
              class="alert alert-warning alert-dismissible fade show text-center pending-alert"
              role="alert"
            >
              <strong> PENDING ADMIN APPROVAL WITHIN 24 HOURS </strong>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-warning alert-dismissible fade show text-center live-alert"
              role="alert"
            >
              <strong> Your restaurant is now live! </strong>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className="primaryTextPage h1">Pizza Zone </p>
            <p className="text-muted mt-2">
              $$ • Pizza, Wings, Pepperoni <br />
              <span className="text-muted">145 Second Street</span> <br />
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="container ">
        <div className="rp-menu-items m-4 ">
          <h4 className="text-center pb-3 pt-3"> Menu </h4>
          <div class="panel-default">
            <table class="table text-center">
              {/* Table Header */}
              <thead class="table-header-menu">
                <tr>
                  <th scope="col"> Item # </th>
                  <th scope="col"> Item Name </th>
                  <th scope="col"> Price </th>
                  <th scope="col"> Description </th>
                  <th scope="col" />
                  <th scope="col" class="text-right">
                    <i
                      className="fas fa-plus menu-icon-plus"
                      data-toggle="modal"
                      aria-hidden="true"
                      data-target="#addItem"
                    ></i>
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>{items.map(renderMenuItem)}</tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Item Modal */}
      <div
        class="modal fade"
        id="addItem"
        data-backdrop="static"
        role="dialog"
        aria-labelledby="addItemLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              {" "}
              Add Menu Item
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body*/}
            <div class="modal-body modal-edit">
              <form className="editItem" onSubmit={addItem}>
                <input
                  className="edit-menu-input"
                  id="redirect-input"
                  type="hidden"
                  name="redirect"
                />
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Item Name </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemName"
                      maxlength="20"
                      required
                      class="form-control"
                      onChange={e => setMenuName(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Price </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      id="itemPrice"
                      maxlength="3"
                      required
                      class="form-control"
                      onChange={e => setMenuPrice(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Description </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemDescip"
                      maxlength="40"
                      required
                      class="form-control"
                      onChange={e => setMenuDescrip(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                  //onClick={() => dispatchEvent(setMenuUpdate(true))}
                >
                  {" "}
                  Update{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Item Modal */}
      <div
        class="modal fade"
        id="editItem"
        role="dialog"
        aria-labelledby="editItemLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              {" "}
              <strong> Edit Item</strong>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body*/}
            <div class="modal-body modal-edit">
              <form className="editItem">
                <input
                  className="edit-menu-input"
                  id="redirect-input"
                  type="hidden"
                  name="redirect"
                />
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Item Name </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemName"
                      maxlength="20"
                      required
                      class="form-control"
                      value="Burger"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Price </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      id="itemPrice"
                      maxlength="3"
                      required
                      class="form-control"
                      value="$12"
                      //onChange={e => dispatch(setMenuPrice(e.target.value))}
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label for="Item "> Description </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemDescip"
                      maxlength="40"
                      required
                      class="form-control"
                      onChange={e => setMenuDescrip(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                >
                  {" "}
                  Update{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerMenu;
