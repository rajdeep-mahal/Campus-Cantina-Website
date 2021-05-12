import React, { useEffect, useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import '../../assets/css/about_individual.css';
import Banner from '../../assets/img/restaurant/Restaurant_Banner.jpg';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 3);

const OwnerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuItemName, setMenuItemName] = useState('');
  const [menuItemDescription, setMenuItemDescription] = useState('');
  const [menuItemPrice, setMenuItemPrice] = useState('');
  const [editItemName, setEditItemName] = useState('');
  const [editItemDescription, setEditItemDescription] = useState('');
  const [editItemPrice, setEditItemPrice] = useState('');
  const [deleteMenuItemID, setDeleteMenuItemID] = useState('');
  const [editMenuItemID, setEditMenuItemID] = useState('');
  const [loadData, setLoadData] = useState(false);
  
    //Edits items from DB
    const handleEditMenuItem = (event) => {
      event.preventDefault();
      if (
        editItemName != '' &&
        editItemDescription != '' &&
        editItemPrice != ''
      ) {
      axios
        .post('http://localhost:3001/api/restaurant-menu/edit-menu-item', null, {
          params: {
          itemName: editItemName,
          itemDescription: editItemDescription,
          itemPrice: editItemPrice,
          itemID: editMenuItemID },
        })
        .then((res) => {
          console.log(res);
          setLoadData(true);
          setEditItemName('');
          setEditItemPrice('');
          setEditItemDescription('');
        });
      }
    };

  //Deletes items from DB
  const handleDeleteMenuItem = (event) => {
    event.preventDefault();
    axios
      .delete('http://localhost:3001/api/restaurant-menu/delete-menu-item', {
        params: { itemID: deleteMenuItemID },
      })
      .then((res) => {
        console.log(res);
        setLoadData(true);
      });
  };

  //Adds items to DB
  const handleAddMenuItem = (event) => {
    let ID = nanoid();
    event.preventDefault();
    if (
      menuItemName != '' &&
      menuItemDescription != '' &&
      menuItemPrice != ''
    ) {
      axios
        .post('http://localhost:3001/api/restaurant-menu/add-menu-item', {
          itemID: ID,
          restaurantID: 5,
          itemName: menuItemName,
          itemDescription: menuItemDescription,
          itemPrice: menuItemPrice,
          restaurantName: 'Taco Shell',
        })
        .then((res) => {
          console.log(res);
          setLoadData(true);
          setMenuItemName('');
          setMenuItemPrice('');
          setMenuItemDescription('');
        });
    }
  };

  //Renders items from DB
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/restaurant-menu/restaurant-menu-items', {
        params: { restaurantName: 'Taco Shell' },
      })
      .then((res) => {
        setMenuItems(res.data);
        setLoadData(false);
      });
  }, [loadData]);

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
              {/* Menu Table */}
              <thead class="table-header-menu">
                <tr>
                  <th scope="col"> Item Name </th>
                  <th scope="col"> Price </th>
                  <th scope="col"> Description </th>
                  <th scope="col" />
                  <th scope="col" class="text-right">
                    <i
                      // ADD ITEM ICON
                      className="fas fa-plus menu-icon-plus"
                      data-toggle="modal"
                      aria-hidden="true"
                      data-target="#addItem"
                    ></i>
                  </th>
                </tr>
              </thead>
              {menuItems.length > 0 ? (
                <>
                  {menuItems.map((items, index) => (
                    <tr key={index}>
                      <td>{items.Name}</td>
                      <td>${items.Price}</td>
                      <td>{items.Description}</td>
                      <td>
                        <i
                          //EDIT ITEM ICON
                          className="fas fa-pen menu-icon "
                          aria-hidden="true"
                          data-toggle="modal"
                          data-target="#editItem"
                          onClick={(e) => {
                            setEditItemName(items.Name);
                            setEditItemPrice(items.Price);
                            setEditItemDescription(items.Description);
                            setEditMenuItemID(items.ID);
                          }}
                        />
                      </td>
                      <td>
                        <i
                          //DELETE ITEM ICON
                          className="fas fa-trash menu-icon text-danger"
                          aria-hidden="true"
                          data-toggle="modal"
                          data-target="#deleteItem"
                          onClick={(e) => {
                            setDeleteMenuItemID(items.ID);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <></>
              )}
            </table>
          </div>
        </div>
      </div>

      {/* Add Item Modal */}
      <div
        class="modal fade"
        id="addItem"
        role="dialog"
        aria-labelledby="addItemLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
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
            <div class="modal-body modal-edit">
              <form>
                <input
                  id="redirect-input"
                  type="hidden"
                  name="redirect"
                />
                <br />
                <div class="row">
                  <div class="col-6">
                    <label> Item Name </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemName"
                      maxlength="20"
                      required
                      class="form-control"
                      value={menuItemName}
                      onChange={(e) => setMenuItemName(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label> Price </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="number"
                      min="0.00"
                      step="any"
                      required
                      class="form-control"
                      value={menuItemPrice}
                      onChange={(e) => setMenuItemPrice(e.target.value)}
                      onBlur={(e) => {
                        let num = parseFloat(menuItemPrice);
                        let cleanNum = num.toFixed(2);
                        setMenuItemPrice(cleanNum);
                      }}
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <label> Description </label>
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      id="itemDescip"
                      maxlength="40"
                      required
                      class="form-control"
                      value={menuItemDescription}
                      onChange={(e) => setMenuItemDescription(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                  data-dismiss="modal"
                  onClick={handleAddMenuItem}
                >
                  Add
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
            <div class="modal-header">
              {' '}
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
            <div class="modal-body modal-edit">
              <form>
                <input
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
                      value={editItemName}
                      onChange={(e) => setEditItemName(e.target.value)}
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
                      type="number"
                      min="0.00"
                      step="any"
                      required
                      class="form-control"
                      value={editItemPrice}
                      onChange={(e) => setEditItemPrice(e.target.value)}
                      onBlur={(e) => {
                          let num = parseFloat(editItemPrice);
                          let cleanNum = num.toFixed(2);
                          setEditItemPrice(cleanNum);
                        }}
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
                      value={editItemDescription}
                      onChange={(e) => setEditItemDescription(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                  data-dismiss="modal"
                  onClick={handleEditMenuItem}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Delete Item Modal */}
      <div
        class="modal fade"
        id="deleteItem"
        role="dialog"
        aria-labelledby="deleteItemLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <strong> Delete Item </strong>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body modal-edit">
              <form className="deleteItem">
                <div className="p-b-2">
                <span> Are you sure? </span>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn save-btn btn-lg btn-block"
                  value="Submit"
                  data-dismiss="modal"
                  onClick={handleDeleteMenuItem}
                >
                  Yes
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
