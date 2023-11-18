// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h2>Open Library App</h2>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          id="searchInput"
          placeholder="Enter your search query"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button onClick={onSearchSubmit}>
          <i className="fas fa-search"></i> {/* Magnifying glass icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
