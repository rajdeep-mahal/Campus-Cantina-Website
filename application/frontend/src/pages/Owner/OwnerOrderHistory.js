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
  const [itemID, setItemID] = useState("");
  const [loadData, setLoadData] = useState(false);

  const handleOrderStatusChange = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/order/order-completed", null, {
        params: { orderID: itemID },
      })
      .then((res) => {
        console.log(res);
        setLoadData(true);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/order/user-orders", {
        params: { restaurantName: "Taco Shell" },
      })
      .then((res) => {
        setOrderItems(res.data);
        console.log(orderItems);
        setLoadData(false);
      });
  }, [loadData]);

  return (
    <div className="container-fluid">
      <br />
      <h3 className="owner-heading text-center"> Orders</h3>

      {/* Orders Table */}
      <div className="table-responsive-sm order-table">
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
            {orderItems.length > 0 ? (
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
                          setOrderContent(item.Order_Contents);
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>Marcus S.</td>
                    <td>{item.Customer_Name}</td>
                    <td>${item.Total}</td>
                    <td>
                      <select
                        class="form-select order-status"
                        onClick={(e) => {
                          setItemID(item.ID);
                          handleOrderStatusChange(); 
                        }}
                      >
                        {item.Completed < 1 ? (
                          <>
                            <option value="progress" selected>
                              In Progress
                            </option>
                            <option value="complete">Completed</option>
                          </>
                        ) : (
                          <option value="complete" selected>
                            Completed
                          </option>
                        )}
                      </select>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <> </>
            )}
          </tbody>
        </table>
      </div>
      {/* View Modal */}
      <div
        class="modal fade"
        id="viewModal"
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="viewModalLabel"
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
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{orderContent}</li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn modal-confirm-btn">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerOrderHistory;
