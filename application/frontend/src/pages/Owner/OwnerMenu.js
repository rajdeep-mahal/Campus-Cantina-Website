import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/css/about_individual.css';
import { customAlphabet } from 'nanoid';
import { Redirect } from 'react-router-dom';
const nanoid = customAlphabet('1234567890', 3);

const OwnerMenu = () => {
  // redux global variable
  const appUser = useSelector((state) => state.appUserReducer.appUser);
  //menu items from backend
  const [menuItems, setMenuItems] = useState([]);
  const [menuItemName, setMenuItemName] = useState('');
  const [menuItemDescription, setMenuItemDescription] = useState('');
  const [menuItemPrice, setMenuItemPrice] = useState(0.0);
  //edit menu item variables
  const [editItemName, setEditItemName] = useState('');
  const [editItemDescription, setEditItemDescription] = useState('');
  const [editItemPrice, setEditItemPrice] = useState(0.0);
  const [editMenuItemID, setEditMenuItemID] = useState('');
  //delete menu item variable
  const [deleteMenuItemID, setDeleteMenuItemID] = useState('');

  //restaurants from backend
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  const currentRestaurant = restaurantsList.filter(
    (restaurant) => restaurant.Name.trim() === 'Taco Shell'
  );

  const [loadData, setLoadData] = useState(false);
  const [showMandatoryFieldsAlert, setShowMandatoryFieldsAlert] =
    useState(false);

  // timeout for the alert
  if (showMandatoryFieldsAlert) {
    setTimeout(() => {
      setShowMandatoryFieldsAlert(false);
    }, 3000);
  }

  //Edits items from DB
  const handleEditMenuItem = (event) => {
    event.preventDefault();
    if (
      editItemName !== '' &&
      editItemDescription !== '' &&
      editMenuItemID !== '' &&
      !isNaN(editItemPrice) &&
      editItemPrice !== '' &&
      parseFloat(editItemPrice) !== 0.0
    ) {
      // console.log(editItemPrice);
      axios
        .post(
          'http://localhost:3001/api/restaurant-menu/edit-menu-item',
          null,
          {
            params: {
              itemName: editItemName,
              itemDescription: editItemDescription,
              itemPrice: editItemPrice,
              itemID: `${editMenuItemID}`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          setLoadData(true);
          setEditItemName('');
          setEditItemPrice(0.0);
          setEditItemDescription('');
          setEditMenuItemID('');
        });
    } else {
      setShowMandatoryFieldsAlert(true);
    }
  };

  //Deletes items from DB
  const handleDeleteMenuItem = (event) => {
    event.preventDefault();
    axios
      .delete('http://localhost:3001/api/restaurant-menu/delete-menu-item', {
        params: { itemID: `${deleteMenuItemID}` },
      })
      .then((res) => {
        // console.log(res.data);
        setLoadData(true);
        setDeleteMenuItemID('');
      });
  };

  //Adds items to DB
  const handleAddMenuItem = (event) => {
    event.preventDefault();
    if (
      menuItemName !== '' &&
      menuItemDescription !== '' &&
      !isNaN(menuItemPrice) &&
      menuItemPrice !== '' &&
      parseFloat(menuItemPrice) !== 0.0
    ) {
      let ID = nanoid();
      axios
        .post('http://localhost:3001/api/restaurant-menu/add-menu-item', {
          itemID: ID,
          restaurantID: `5`,
          itemName: menuItemName,
          itemDescription: menuItemDescription,
          itemPrice: menuItemPrice,
          restaurantName: 'Taco Shell',
        })
        .then((res) => {
          // console.log(res.data);
          setLoadData(true);
          setMenuItemName('');
          setMenuItemPrice(0.0);
          setMenuItemDescription('');
        });
    } else {
      setShowMandatoryFieldsAlert(true);
    }
  };

  //Renders items from DB
  useEffect(() => {
    if (appUser.type === 'owner') {
      axios
        .get(
          'http://localhost:3001/api/restaurant-menu/restaurant-menu-items',
          {
            params: { restaurantName: 'Taco Shell' },
          }
        )
        .then((res) => {
          setMenuItems(res.data);
          setLoadData(false);
        });
    }
  }, [loadData]);

  return (
    <>
      {appUser.type === 'owner' ? (
        <div className="container-fluid text-center">
          <div className="mx-5">
            {currentRestaurant.map((item, i) => (
              <div key={i}>
                <img
                  className="img-fluid restaurantBanner"
                  src={
                    'data:image/jpeg;base64,' +
                    new Buffer(item.Display_Pic_Banner)
                  }
                  alt="Banner"
                />
                <div className="container">
                  {item.Approved === 0 ? (
                    <div
                      className="alert alert-warning fade show text-center pending-alert w-75 mx-auto mt-4"
                      role="alert"
                    >
                      <strong> PENDING ADMIN APPROVAL WITHIN 24 HOURS </strong>
                    </div>
                  ) : (
                    <div
                      className="alert alert-warning alert-dismissible fade show text-center live-alert w-75 mx-auto mt-4"
                      role="alert"
                    >
                      <strong> YOUR RESTAURANT IS NOW LIVE ! </strong>
                      <button
                        type="button"
                        className="close close-live text-warning"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  <div>
                    <p className="primaryTextPage h1 mt-2">{item.Name} </p>
                  </div>
                  <div className="restaurant-info secondaryTextPage mx-auto">
                    <table className="mx-auto">
                      <tbody>
                        <tr>
                          <td className="align-middle primaryTextPage">
                            <p className="m-1">
                              {item.Price_Level} • {item.Cuisine}, {item.Tags}
                            </p>
                            <p className="m-1">{item.Address}</p>
                            <p className="m-1">
                              Delivery fee : ${item.Delivery_Fee}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="container ">
            <div className="rp-menu-items m-4 ">
              <h4 className="text-center pb-3 pt-3"> Menu </h4>
              {showMandatoryFieldsAlert ? (
                <div
                  className="text-center mt-2 alert alert-danger alert-dismissible fade show w-75 mx-auto"
                  role="alert"
                >
                  Please enter/update all fields to continue
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : (
                <> </>
              )}
              {menuItems.length > 0 ? (
                <div className="panel-default">
                  <table className="table text-center">
                    {/* Menu Table */}
                    <thead className="table-header-menu">
                      <tr>
                        <th scope="col"> Item Name </th>
                        <th scope="col"> Price </th>
                        <th scope="col"> Description </th>
                        <th scope="col" />
                        <th scope="col" className="text-right">
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
                    <tbody>
                      {menuItems.map((items, index) => (
                        <tr key={index}>
                          <td>{items.Name}</td>
                          <td>${items.Price.toFixed(2)}</td>
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
                                setEditItemPrice(items.Price.toFixed(2));
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
                    </tbody>
                  </table>
                </div>
              ) : (
                <div
                  className="text-center mt-2 alert alert-warning alert-dismissible fade show w-75 mx-auto"
                  role="alert"
                >
                  Add new items to your menu
                  <i
                    // ADD ITEM ICON
                    className="fas fa-plus menu-icon-plus new-menu-plus"
                    data-toggle="modal"
                    aria-hidden="true"
                    data-target="#addItem"
                  ></i>
                </div>
              )}
            </div>
          </div>
          {/* Add Item Modal */}
          <div
            className="modal fade"
            id="addItem"
            role="dialog"
            aria-labelledby="addItemLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  Add Menu Item
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body modal-edit">
                  <form>
                    <input
                      id="add-redirect-input"
                      type="hidden"
                      name="redirect"
                    />
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <label> Item Name </label>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          id="addItemName"
                          required
                          className="form-control"
                          value={menuItemName}
                          onChange={(e) => setMenuItemName(e.target.value)}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <label> Price </label>
                      </div>
                      <div className="col-6">
                        <input
                          type="number"
                          id="addItemPrice"
                          min="0.00"
                          step="0.01"
                          required
                          className="form-control"
                          value={menuItemPrice}
                          onChange={(e) => setMenuItemPrice(e.target.value)}
                          onBlur={(e) => {
                            if (!isNaN(menuItemPrice) && menuItemPrice !== '') {
                              let num = parseFloat(menuItemPrice);
                              let cleanNum = num.toFixed(2);
                              setMenuItemPrice(cleanNum);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <label> Description </label>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          id="addItemDescription"
                          required
                          className="form-control"
                          value={menuItemDescription}
                          onChange={(e) =>
                            setMenuItemDescription(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="btn bg-warning btn-lg btn-block"
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
            className="modal fade"
            id="editItem"
            role="dialog"
            aria-labelledby="editItemLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  {' '}
                  <strong> Edit Item</strong>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body modal-edit">
                  <form>
                    <input
                      id="edit-redirect-input"
                      type="hidden"
                      name="redirect"
                    />
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="Item "> Item Name </label>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          id="editItemName"
                          required
                          className="form-control"
                          value={editItemName}
                          onChange={(e) => setEditItemName(e.target.value)}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="Item "> Price </label>
                      </div>
                      <div className="col-6">
                        <input
                          type="number"
                          id="editItemPrice"
                          min="0.00"
                          step="any"
                          required
                          className="form-control"
                          value={editItemPrice}
                          onChange={(e) => setEditItemPrice(e.target.value)}
                          onBlur={(e) => {
                            if (!isNaN(editItemPrice) && editItemPrice !== '') {
                              let num = parseFloat(editItemPrice);
                              let cleanNum = num.toFixed(2);
                              setEditItemPrice(cleanNum);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="Item "> Description </label>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          id="editItemDescription"
                          required
                          className="form-control"
                          value={editItemDescription}
                          onChange={(e) =>
                            setEditItemDescription(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="btn bg-warning btn-lg btn-block"
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
            className="modal fade"
            id="deleteItem"
            role="dialog"
            aria-labelledby="deleteItemLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <strong> Delete Item </strong>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body modal-edit">
                  <form className="deleteItem">
                    <div className="p-b-2">
                      <span> Are you sure? </span>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="btn bg-warning btn-lg btn-block"
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
      ) : appUser.type === 'guest' ||
        appUser.type === undefined ||
        appUser.type === 'customer' ? (
        <Redirect to="/" />
      ) : appUser.type === 'driver' ? (
        <Redirect to="/driver/current-orders" />
      ) : (
        <> </>
      )}
    </>
  );
};

export default OwnerMenu;
