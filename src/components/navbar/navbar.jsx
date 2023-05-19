import React, { useState } from "react";
import "./navbar.css";
import avatar from "./avatar.png"

const Navbar = ({ user }) => {

  

  return (
    <nav className="navbar">
      <div className="leftNav">
        <p className="welcome">Welcome!</p>
      </div>
      <div className="rightNav">
        <div className="user">
          <div className="userPic">
            <img className="picture" src={avatar} alt="profile-pic" />
          </div>
          <span className="username">{user}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
