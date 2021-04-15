import React from 'react';
import '../assets/css/driver.css'

const DriverAvailableOrders = () => {

  return (
    <div className="container text-center">
      <div className = "order_header h3 text-white text-center py-2">Assigned Orders</div>
        
        <table className = "table table_order">
        <thead>
        <tr>
            <th className = "border border_header">
              <span className = "font-italic"> Order ID
              </span>
            </th>
            <th className = "border border_header">
              <span className = "font-italic">Customer Name
              </span>
            </th>
            <th className = "border border_header">
              <span className = "font-italic">Order Total
              </span>
            </th>
            <th className = "border border_header">
              <span className = "font-italic">Order Status
              </span>
            </th>
            <th className = "border border_header">
              <span className = "font-italic">
                Order Details
                </span>
              </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th className = "border border_body">#111125</th>
            <td className = "border border_body">Will Smith
              <br/> (415) 123 4567
            </td>
            <td className = "border border_body">&#36;50</td>
            <td className = "border border_body">
              <span className = "text-info font-italic">Pending
              </span>
            </td>
            <td className = "border border_body"><button type = "button" className = "btn btn-warning btn-sm border border_header">View</button></td>
          </tr>

          <tr>
            <th className = "border border_body">#111124</th>
            <td className = "border border_body">Robert
            <br/> (415) 555 5554
            </td>
            <td className = "border border_body">&#36;40</td>
            <td className = "border border_body">
              <span className = "font-italic text-info">Pending
              </span>
            </td>
            <td className = "border border_body"><button type = "button" className = "btn btn-warning btn-sm border border_header">View</button></td>
          </tr>

          <tr>
            <th className = "border border_body">#111119</th>
            <td className = "border border_body">Jack
            <br/> (415) 535 5554
            </td>
            <td className = "border border_body">&#36;20</td>
            <td className = "border border_body">
              <span className = "font-italic">Completed
              </span>
            </td>
            <td className = "border border_body"><button type = "button" className = "btn btn-warning btn-sm border border_header">View</button></td>
          </tr>
        </tbody>
        </table>
      
    </div>
  );
};

export default DriverAvailableOrders