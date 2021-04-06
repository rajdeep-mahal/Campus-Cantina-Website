import React from "react";
import "../assets/css/ownerlayout.css";
import "../index.css";

const OwnerOrderHistory = () => {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="text-center">
        <h3> Orders</h3>
      </div>
      <div class="table-responsive-sm">
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
            <tr>
              <th scope="row">111232</th>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-dark view-btn"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  View
                </button>
              </td>
              <td>John C.</td>
              <td>Mark S.</td>
              <td>$15</td>
              <td>
                <button
                  class="btn pending-btn"
                  type="button"
                  onclick="myFunction()"
                  id="myButton1"
                >
                  Pending
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">100331</th>
              <td>
                <button type="button" class="btn btn-outline-dark view-btn">
                  View
                </button>
              </td>
              <td>Jen C.</td>
              <td>Tom S.</td>
              <td>$22</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <th scope="row">556772</th>
              <td>
                <button type="button" class="btn btn-outline-dark view-btn">
                  View
                </button>
              </td>
              <td>Steven L.</td>
              <td>Susan B.</td>
              <td>$20</td>
              <td>Complete</td>
            </tr>
            <tr>
              <th scope="row">900344</th>
              <td>
                <button type="button" class="btn btn-outline-dark view-btn">
                  View
                </button>
              </td>
              <td>John L.</td>
              <td>Maria M.</td>
              <td>$25</td>
              <td>Complete</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
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
                <li class="list-group-item"> 1 x Cheeseburger </li>
                <li class="list-group-item">1 x Large Diet Coke </li>
                <li class="list-group-item">Special Instructions: No Onions</li>
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
