/* May not be necessary */

import React from 'react';
import '../assets/css/splash.css';
import CCLogo from '../assets/img/CC_Logo.png';

const Splash = () => {

  return (
    <div className="text-center">
      <div
        className="splash-header text-center"
        style={{ fontSize: '10px', color: 'grey' }}
      >
        <span>
          SFSU Software Engineering Project CSC 648/848 | Spring 2021 | For
          Demonstration Only
        </span>
      </div>
      <div className="splash navbar-expand-md splash-align">
      <div className="mx-auto text-center" style={{ display: 'flex' }}>
          <img src={CCLogo} alt="logo" height="55" className="splash-logopic" />
          <h1 className="splash-campus">campus cantina</h1>
        </div>
      </div>
    </div>
  );
};

export default Splash