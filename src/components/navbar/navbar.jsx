import React, { useState } from "react";
import bars from "../../assets/bars.png";
import "./navbar.css";

const Navbar = ({ username, profilePic }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClickLogo = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="navbar">
      <div className="leftNav">
        <img src={bars} alt="bars" className="bars" onClick={handleClickLogo} />
        {showOptions && (
          <ul className="bars-options">
            <li>oa</li>
            <li>oa</li>
            <li>oa</li>
          </ul>
        )}
        <p className="welcome">Welcome! {username}</p>
      </div>
      <div className="rightNav">
        <div className="user">
          <div className="userPic">
            <img src={profilePic} alt="profile-pic" />
          </div>
          <span className="username">{username}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
