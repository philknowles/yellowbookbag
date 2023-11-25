import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BarcodeScanner from './BarcodeScanner';

const Navbar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showVideo, setShowVideo] = useState(false);
  const [barcodeCaptured, setBarcodeCaptured] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

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
    console.log('Scanned barcode:', barcode);
    setBarcodeCaptured(true);
    setShowVideo(false);
    onSearchChange({ target: { value: barcode } }); // Update searchTerm with scanned barcode
  };

  const handleSearchInApp = () => {
    console.log('Search in app for ISBN:', searchTerm);
    const query = `https://openlibrary.org/search.json?q=${searchTerm}`;

    // Fetch the data from the API
    fetch(query)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        onSearchSubmit(); // Call the provided onSearchSubmit prop
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
        // Handle the error, e.g., display a user-friendly message
      });
  };

  const handleSearchFieldClick = () => {
    setShowVideo(true);
    setBarcodeCaptured(false);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setBarcodeCaptured(false);
  };

  const currentURL = window.location.pathname;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">
          <Link to="/">
              <h2>The Yellow Book Bag</h2>
          </Link>
        </div>
        <div className="navbar-search">
          <ul className="navbar-list">
            <li>
              <button onClick={() => navigate('/about')}>About</button>
            </li>
          </ul>
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
                      {/* Assuming BarcodeScanner component works as expected */}
                      <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
                      <button className="close-video-btn" onClick={handleVideoClose}>
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  )}
                  <button onClick={onSearchSubmit}>
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
                <button onClick={onSearchSubmit}>
                  <i className="fas fa-search"></i>
                </button>
              </>
            )
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;