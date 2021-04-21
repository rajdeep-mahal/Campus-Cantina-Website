import React from 'react';
import '../assets/css/customer_checkout.css';


const Checkout = () => {
  return (
    <div className = "container-fluid text-center">
      <div className = "h2 checkout_borders border-bottom pt-2 header_bg mb-4"> Checkout 
      </div>
      <form>
          <div className = "form-group w-25 pb-2 mx-auto col-md-4 col-sm-4 mb-3">
            <label for = "inputAddress" className = " font-weight-bold">Delivery Address:</label>
            <input type = "address" className = "form-control border-war" id = "inputAddress" aria-describedby = "addressHelp" placeholder = "Dorm #323, SFSU, SF" ></input>
          </div>
      </form>
      <div className = "col">
        <div className = "row">
      <table className = "table table_details">
        
        <thead className = "bg-warning">
          <tr>
            <th className = "font-italic">Restaurant Name</th>
            <th className = "font-italic">Item Name</th>
            <th className = "font-italic">Quantity</th>
            <th className = "font-italic">Price</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <th>Restaurant 1</th>
            <td>Tacos</td>
            <td>2</td>
            <td>&#36;9.50</td>
          </tr>
          <tr>
            <th>Restaurant 2</th>
            <td>Burrito</td>
            <td>1</td>
            <td>&#36;12.00</td>
          </tr>
          <tr>
            <th>Restaurant 2</th>
            <td>Coca Cola</td>
            <td>1</td>
            <td>&#36;2.50</td>
          </tr>
        </tbody>
      </table>
          <div className = "card mb-3 total_box h6">
            <ul className = "list-group list-group-flush">
              <li className = "list-group-item"><span className = "float-left">Subtotal</span> <span className = "float-right">&#36;24.00</span> </li>
              <li className = "list-group-item"><span className = "float-left">Tips</span> <span className = "float-right">&#36;5.00</span>  </li>
              <li className = "list-group-item"><span className = "float-left">Delivery Fee</span> <span className = "float-right">&#36;3.00</span>  </li>
              <li className = "list-group-item"><span className = "float-left">Discount</span> <span className = "float-right">&#36;0.00</span> </li>
              <li className = "list-group-item"><span className = "float-left">Taxes</span> <span className = "float-right">&#36;8.00</span>  </li>
              <li className = "list-group-item pt-4 total_bg font-weight-bold h5"><span className = "float-left">Total</span> <span className = "float-right">&#36;40.00</span>  </li>
              <button type = "button" className = "btn confirm_order m-3 btn-block w-75 mx-auto text-white">Confirm Order</button>
            </ul>
          </div>
          <div className = "col border-top checkout_borders">
          <div className = "text-muted">*Please pay total amount to delivery driver in cash*</div>
          <div className = "row"> <span className = "col-1"> Delivery Notes:</span><textarea className="text_field m-4 w-50"></textarea> </div>
          <div className = "row"> <span className = "col-1"> Special instructions to Chef:</span><textarea className="text_field m-4 w-50"></textarea> </div>
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default Checkout