import React, { useState } from "react";
import bars from "../../assets/bars.png";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClickLogo = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav>
      <div className="left-section">
        <img src={bars} alt="bars" onClick={handleClickLogo} />
        {showOptions && (
          <ul className="options-list">
            <li>Opção 1</li>
            <li>Opção 2</li>
            <li>Opção 3</li>
          </ul>
        )}
      </div>
      <div className="right-section">
        <div className="user-profile">
          <div className="profile-image">
            <img src="" alt="Foto de perfil" />
          </div>
          <span className="username">Nome de usuário</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
