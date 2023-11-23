// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const currentURL = window.location.pathname

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h2>The Yellow Book Bag</h2>
      </div>
      <div className="navbar-search">
        <ul className="navbar-list">
          <li>
            <button onClick={() => navigateTo('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/about')}>About</button>
          </li>
        </ul>
        {currentURL === "/" || currentURL === "/yellowbookbag/" ? 
          <input
            type="text"
            id="searchInput"
            placeholder="Enter your search query"
            value={searchTerm}
            onChange={onSearchChange}
          />
        : ''}
        {currentURL === "/" ? 
          <button onClick={onSearchSubmit}>
            <i className="fas fa-search"></i> {/* Magnifying glass icon */}
          </button>
        : '' }
      </div>
    </nav>
  );
};

export default Navbar;
