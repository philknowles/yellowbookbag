// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BarcodeScanner from './BarcodeScanner';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const [scannedBarcode, setScannedBarcode] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      </div>
      {currentURL === "/" || currentURL === "/yellowbookbag/" ? (
            isMobile ? (
              <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
            ) : (
              <div>
                <input
                  type="text"
                  value={scannedBarcode}
                  placeholder="Scanned Barcode"
                  onChange={() => {}}
                />
                <button onClick={handleSearchInApp}>
                  <i className="fas fa-search"></i> {/* Magnifying glass icon */}
                </button>
              </div>
            )
          ) : (
            <>
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
            </>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
