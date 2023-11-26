// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BarcodeScanner from './BarcodeScanner';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showVideo, setShowVideo] = useState(false);
  const [barcodeCaptured, setBarcodeCaptured] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentURL = window.location.pathname;

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
    setBarcodeCaptured(true);
    setShowVideo(false);
    onSearchChange({ target: { value: barcode } });
  };

  const handleSearchFieldClick = () => {
    setShowVideo(true);
    setBarcodeCaptured(false);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setBarcodeCaptured(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };


  return (
    <>
      <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-title">
          <Link to="/">
            <h2>The Yellow Book Bag</h2>
          </Link>
        </div>
        <div className="navbar-search-container">
          <div className="navbar-search">
            {currentURL === '/' || currentURL === '/yellowbookbag/' ? (
              isMobile ? (
                <>
                  <div>
                    <input
                      type="text"
                      placeholder="Scan ISBN..."
                      value={searchTerm}
                      onChange={onSearchChange}
                      onClick={handleSearchFieldClick}
                    />
                    {showVideo && (
                      <div className="video-container">
                        <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
                        <button className="close-video-btn" onClick={handleVideoClose}>
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    )}
                    <button className="search-button" onClick={onSearchSubmit}>
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    id="searchInput"
                    placeholder="Enter your search query"
                    value={searchTerm}
                    onChange={onSearchChange}
                  />
                  <button className="search-button" onClick={onSearchSubmit}>
                    <i className="fas fa-search"></i>
                  </button>
                </>
              )
            ) : null}
          </div>
          <div className="navbar-list">
            <button className="menu-toggle" onClick={handleMenuToggle}>
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            {menuOpen && (
              <ul>
                <li onClick={() => handleNavigate('/about')}>About</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
