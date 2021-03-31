import React from 'react';
import { Link } from 'react-router-dom';

const OwnerLogin = () => {

  return (
    <div className="text-center">
      <br/>
      <h1>Restaurant Login</h1>
      <Link to="/ownersignup">Sign Up</Link>
    </div>
  );
};

export default OwnerLogin
