import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BarcodeScanner from './BarcodeScanner';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const navigate = useNavigate();
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
    console.log('Search in app for ISBN:', scannedBarcode);
    // Perform any additional logic, such as searching within your application
  };

  const currentURL = window.location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h2>The Yellow Book Bag</h2>
      </div>
      <div className="navbar-search">
        <ul className="navbar-list">
          <li>
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/about')}>About</button>
          </li>
        </ul>
        {currentURL === '/' || currentURL === '/yellowbookbag/' ? (
          isMobile ? (
            <div>
              <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
              <input
                type="text"
                value={scannedBarcode}
                placeholder="Enter ISBN..."
                onChange={() => {}}
              />
              <button onClick={handleSearchInApp}>
                <i className="fas fa-search"></i> {/* Magnifying glass icon */}
              </button>
            </div>
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
          )
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
