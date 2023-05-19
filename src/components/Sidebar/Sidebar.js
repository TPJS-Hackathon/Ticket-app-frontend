import React, { useState } from 'react';
import './Sidebar.css';
import logo from './Rectangle 2.png';
import { FiHome, FiUsers, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Imagem de fundo" />
      </div>
      <div className="menu">
        <div className="hamburger" onClick={handleToggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul>
          <li>
            <Link to="/dashboard"
              className={activeItem === 'dashboard' ? 'active' : ''}
              onClick={() => handleItemClick('dashboard')}
            >
              <FiHome className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href="#"
              className={activeItem === 'users' ? 'active' : ''}
              onClick={() => handleItemClick('users')}
            >
              <FiUsers className="icon" />
              Users
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeItem === 'tickets' ? 'active' : ''}
              onClick={() => handleItemClick('tickets')}
            >
              <FiFileText className="icon" />
              Tickets
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
