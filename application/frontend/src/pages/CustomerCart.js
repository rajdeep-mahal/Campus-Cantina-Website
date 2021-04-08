import React from "react";
import '../assets/css/menu_sidebar.css';




const CustomerCart = () =>{
    return(
<div className = "small-container cart-page">
        <table className = "table table-light border">
          <thead>
          <tr>
            <th className = "font-italic">Product</th>
            <th className = "font-italic">Quantity</th>
            <th className = "font-italic">Price</th>
          </tr>

          </thead>

          <tbody>
          <tr>
            <th scope="row">Burrito</th>
            <td><button className="remove-button btn fa fa-plus-circle fa-xs"></button><input className = "quantity-input col-sm-5 text-center" type="number"></input><button className="remove-button btn fa fa-minus-circle fa-xs"></button></td>
            <td>&#36;12</td>
          </tr>
          <tr>
            <th scope="row">Tacos</th>
            <td><button className="remove-button btn fa fa-plus-circle fa-xs"></button><input className = "quantity-input col-sm-5 text-center input-group-lg" type="number"></input><button className="remove-button btn fa fa-minus-circle fa-xs"></button></td>
            <td>&#36;9.50</td>
          </tr>
          <tr>
            <th scope="row">Coca-cola</th>
            <td><button className="remove-button btn fa fa-plus-circle fa-xs"></button><input className = "quantity-input col-sm-5 text-center input-lg" type="number"></input><button className="remove-button btn fa fa-minus-circle fa-xs"></button></td>
            <td>&#36;2.50</td>
          </tr>
          </tbody>
        </table>
        <div class="card">
          <div class="card-body">
            Delivery Instructions: <br/>
            <input className = "form-control form-control-lg mb-2" type="text"></input> 
          </div>
        </div>
        <div class = "px-4">
        <table className = "col text-center">
          <tr>
            <td className = "h5 text-left py-3">Subtotal:</td>
            <td className = "h5 text-right">&#36; 24</td>
          </tr>
        </table>
        </div>

        <div class = "col text-center py-3">
          <button type="checkout" class="btn btn-primary btn-lg btn-block">Checkout</button>
          </div>
          </div>

    );
};
export default CustomerCart;