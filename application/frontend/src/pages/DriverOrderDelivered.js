import React from "react";
import '../assets/css/driver.css';
import map_sample from '../assets/img/map_customerorder.png';



const DriverOrderDelivered = () =>{
    return(
        <div className = "container-fluid">
            <div className = "order_header h3 text-white text-center py-3">Order Details</div>
            <div className = "card card-fluid border border-warning w-75 d-flex mx-auto">
            <div className = "card-header h4 pt-3 font-italic font-weight-bold bg-warning">Customer Order:<span className = "h4">#112233</span></div>
                <div className = "card-body">
                    <div className = "py-2 px-5">
                    <div className = "h4 text-center font-weight-bold">Head to Customer</div>
                    <img src = {map_sample} alt = "map_sample" className = "border border-warning d-block img-fluid customer_order_map pb-4 ml-auto mr-auto mb-4" />
                    <div className = "row justify-content-around">
                        <div className = "col-4">
                        <h5>Order Details</h5>
                    <ul className = "py-1">
                        <li>Sandwich</li>
                        <li>Coke</li>
                    </ul>
                    <div className = "h5 font-weight-bold">Total: <span>&#36;24</span></div>
                    <div className = "h5 pt-3">Order Status: <span className = "font-italic">Pending</span></div>
                        </div>

                        <div className = "col-3">
                        <h5>Customer:</h5>
                    <ul className = "list-unstyled">
                        <li className = "px-2">Will Smith</li>
                        <li className = "px-2">(415) 123-4567</li>
                    </ul>
                    <button type = "button" className = "btn btn-warning mb-2 ml-2 text-white">Directions</button>
                    <div className = "h5">Delivery Instructions: <br/> *<span className = "font-italic">Our apartment is located at the back of the building</span>*</div>
                        </div>
                    </div>
                    <div className = "delivered_text text-white text-center w-25 h4">Delivered!</div>
                    </div>

                </div>
            </div>

        </div>
    );
};
export default DriverOrderDelivered;