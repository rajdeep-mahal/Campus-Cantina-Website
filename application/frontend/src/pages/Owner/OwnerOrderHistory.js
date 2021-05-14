/*
Summary of OwnerOrderHistory.js: 
 - Renders on '/owner/orders'
 - to load when clicked on Orders on the Sidebar for Owner's login
*/
import React, { useEffect, useState } from "react";
import "../../assets/css/ownerlayout.css";
import "../../assets/css/index.css";
import axios from "axios";

const items = [
  { id: "111232", driver: "John C.", customer: "Mark S.", price: "$15" },
  { id: "100331", driver: "Jen O.", customer: "Tom S.", price: "$22" },
  { id: "556772", driver: "Steven Y.", customer: "Susan B.", price: "$20" },
  { id: "900344", driver: "John. L", customer: "Maria M.", price: "$25" },
];

{
  /* Renders each row for Orders Table */
}
// const renderOrderItem = (item, index) => {
//   return (
//     <tr key={index}>
//       <td>{item.id}</td>
//       <td>
//         <button
//           type="button"
//           class="btn btn-outline-dark view-btn"
//           data-toggle="modal"
//           data-target="#viewModal"
//         >
//           View
//         </button>
//       </td>
//       <td>{item.driver}</td>
//       <td>{item.customer}</td>
//       <td>{item.price}</td>
//       <td>
//         <select class="form-select order-status">
//           <option selected>Pending</option>
//           <option value="progress">In Progress</option>
//           <option value="complete">Completed</option>
//         </select>
//       </td>
//     </tr>
//   );
// };

const OwnerOrderHistory = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user-orders/user-orders", {
        params: { restaurantName: "Taco Shell" },
      })
      .then((res) => {
        setOrderItems(res.data);
        //setLoadData(false);
      });
  }, []);//loadData]);

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
                    <td>{item.id}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-dark view-btn"
                        data-toggle="modal"
                        data-target="#viewModal"
                      >
                        View
                      </button>
                    </td>
                    <td>{item.driver}</td>
                    <td>{item.customer}</td>
                    <td>{item.price}</td>
                    <td>
                      <select class="form-select order-status">
                        <option selected>Pending</option>
                        <option value="progress">In Progress</option>
                        <option value="complete">Completed</option>
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
                <li class="list-group-item">1 x Cheeseburger </li>
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
