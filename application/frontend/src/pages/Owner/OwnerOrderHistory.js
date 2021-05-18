/*
Summary of OwnerOrderHistory.js: 
 - Renders on '/owner/orders'
 - to load when clicked on Orders on the Sidebar for Owner's login
*/
import React, { useEffect, useState } from "react";
import "../../assets/css/ownerlayout.css";
import "../../assets/css/index.css";
import axios from "axios";

const OwnerOrderHistory = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [orderContent, setOrderContent] = useState([]);
  // const [itemID, setItemID] = useState("");
  // const [orderStatus, setOrderStatus] = useState("Pending");
  const [loadData, setLoadData] = useState(false);

  // const handleOrderStatusChange = (event) => {
  //   event.preventDefault();
  //   console.log("calling handleOrderStatusChange");
  //   console.log(itemID);
  //   axios
  //     .post("http://localhost:3001/api/order/order-completed", {
  //       params: { orderID: itemID },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setLoadData(true);
  //       setItemID("");
  //     });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/order/user-orders", {
        params: { restaurantName: "Taco Shell" },
      })
      .then((res) => {
        setOrderItems(res.data);
        setLoadData(false);
        setOrderContent([]);
      });
  }, [loadData]);

  return (
    <div className="container-fluid">
      <br />
      <h3 className="owner-heading text-center"> Orders</h3>

      {orderItems.length > 0 ? (
        <div className="table-responsive-sm order-table">
          {/* Orders Table */}
          <table class="table table-striped ">
            <thead>
              <tr class="table-secondary" className="order-list-title">
                <th scope="col">Order #</th>
                <th scope="col">Items</th>
                <th scope="col">Driver</th>
                <th scope="col">Customer</th>
                <th scope="col">Price</th>
                <th scope="col">Order Status</th>
              </tr>
            </thead>

            <tbody>
              <>
                {orderItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.ID}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-dark view-btn"
                        data-toggle="modal"
                        data-target="#viewModal"
                        onClick={(e) => {
                          setOrderContent(JSON.parse(item.Order_Contents));;
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>Marcus S.</td>
                    <td>{item.Customer_Name}</td>
                    <td>${item.Total}</td>
                    <td>
                      {/* <select
                        class="form-select order-status"
                        onClick={(e) => {
                          setItemID(item.ID);; 
                        }}
                      >
                      */}
                      {item.Completed < 1 ? (
                        <label> Pending</label>
                      ) : (
                        <label> Completed</label>
                      )}
                      {/*
                          <>
                            <option value="progress" selected>
                              In Progress
                            </option>
                            <option value="complete" onSelect={handleOrderStatusChange}>Completed</option>
                          </>
                        ) : (
                          <option value="complete" selected>
                            Completed
                          </option>

                        )}
                      </select> */}
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <br /> <br />
          <h4 className="owner-heading text-center">
            {" "}
            Waiting to recieve orders...
          </h4>
        </>
      )}
      {/* View Modal */}
      <div
        class="modal fade"
        id="viewModal"
        tabindex="-1"
        role="dialog"
        data-dismiss="modal"
        aria-hidden="true"
      >
        <div class="modal-dialog " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">
                Ordered Items
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table text-center">
                <thead>
                  <tr class="table-warning" className="order-list-title">
                    <th scope="col">Item</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderContent.map((items, index) => (
                    <tr key={index}>
                      <td>{items.itemName}</td>
                      <td>{items.itemComments}</td>
                      <td>{items.itemPrice}</td>
                      <td> x </td>
                      <td>{items.itemCount}</td>
                      <td><strong>{items.itemCalculatedPrice}</strong></td>
                    </tr>
                  ))} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerOrderHistory;
