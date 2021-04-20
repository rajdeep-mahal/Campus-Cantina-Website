import React, { useState } from 'react';
import DriverMenuSideBar from './DriverMenuSideBar';
import MenuSideBar from './MenuSideBar';
import OwnerMenuSideBar from './OwnerMenuSideBar'


const SwitchedMenuSideBar = () => {
    const user = "Owner";
    
    function isLoggedIn(user) {
        if(user === "Guest"){
            return <MenuSideBar></MenuSideBar>
        }else if(user == "Registered"){

        }
        else if(user === "Driver"){
            return <DriverMenuSideBar/>;
        }else if(user === "Owner"){
            return <OwnerMenuSideBar/>;
        }
    }

  return (
      <>
      {isLoggedIn(user)}
      </>
  );
}

export default SwitchedMenuSideBar;