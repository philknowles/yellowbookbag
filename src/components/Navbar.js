// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BarcodeScanner from './BarcodeScanner';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const [scannedBarcode, setScannedBarcode] = useState('');

  const handleBarcodeScanned = (barcode) => {
    setScannedBarcode(barcode);
  };

  const handleSearchInApp = () => {
    // Perform a custom action with the scanned barcode, such as searching within your application
    console.log('Search in app for ISBN:', scannedBarcode);
    // You can implement your own logic here, e.g., navigating to a book details page.
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
        <div>
      <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
      <input
        type="text"
        value={scannedBarcode}
        placeholder="Scanned Barcode"
        onChange={() => {}}
      />
      <button onClick={handleSearchInApp}>Search in App</button>
    </div>
        {currentURL === "/" || currentURL === "/yellowbookbag/" ? 
          <input
            type="text"
            id="searchInput"
            placeholder="Enter your search query"
            value={searchTerm}
            onChange={onSearchChange}
          />
        : ''}
        {currentURL === "/" || currentURL === "/yellowbookbag/" ? 
          <button onClick={onSearchSubmit}>
            <i className="fas fa-search"></i> {/* Magnifying glass icon */}
          </button>
        : '' }
      </div>
    </nav>
  );
};

export default Navbar;
