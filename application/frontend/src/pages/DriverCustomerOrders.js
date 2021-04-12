import React from "react";
import '../assets/css/home.css';
import map_sample from '../assets/img/map_customerorder.png';



const DriverCustomerOrders = () =>{
    return(
        <div className = "order_details p-5 m-5">
            <div className = "order_header h3 text-white text-center py-3">Order Details</div>
            <div className = "h4 px-3 pt-3 font-italic font-weight-bold">Customer Order: <span className = "h4">#112233</span></div>
            <div className = "customer_order_card card border border-warning">
                <div className = "card-body">
                    <div className = "px-4 py-2">
                    <div className = "h4 text-center font-weight-bold">Head to Customer</div>
                    <img src = {map_sample} alt = "map_sample" className = "img-fluid customer_order_map pb-4" />
                        <span className = "h5">Order Details</span>
                    <ul className = "py-1">
                        <li>Sandwich</li>
                        <li>Coke</li>
                    </ul>
                    <div className = "h5 font-weight-bold">Total: <span>&#36;24</span></div>
                    <div className = "h5">Order Status: <span className = "font-italic">Pending</span></div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default DriverCustomerOrders;