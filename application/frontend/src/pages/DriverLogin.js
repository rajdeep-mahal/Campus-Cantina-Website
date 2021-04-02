import React from 'react';
import { Link } from 'react-router-dom';

const DriverLogin = () => {

  return (
    <div className="text-center">
      <br/>
      <h1>Driver Sign In</h1>
      <Link to="/driversignup">Sign Up</Link>
    </div>
  );
};

export default DriverLogin