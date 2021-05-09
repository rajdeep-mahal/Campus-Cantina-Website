/*
Summary of MenuSideBar.js: 
 - component to switch the menu side bar options based on the logged in user
 - Components: DriverMenuSideBar, MenuSideBar, OwnerMenuSideBar
*/
import React, { useState } from 'react';
import DriverMenuSideBar from './DriverMenuSideBar';
import MenuSideBar from './MenuSideBar';
import OwnerMenuSideBar from './OwnerMenuSideBar';

const SwitchedMenuSideBar = () => {
  const user = 'Guest';

  function isLoggedIn(user) {
    if (user === 'Guest') {
      return <MenuSideBar></MenuSideBar>;
    } else if (user === 'Registered') {
    } else if (user === 'Driver') {
      return <DriverMenuSideBar />;
    } else if (user === 'Owner') {
      return <OwnerMenuSideBar />;
    }
  }

  return <>{isLoggedIn(user)}</>;
};

export default SwitchedMenuSideBar;
