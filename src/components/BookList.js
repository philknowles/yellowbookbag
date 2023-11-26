// BookList.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookDetails from './BookDetails';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import './Modal.css';
import './BookList.css'; // Import the new CSS file

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [hasSearched, setHasSearched] = useState(false);

  const currentURL = window.location.pathname;

  useEffect(() => {
    // Fetch data from the Open Library API for popular books (no specific genre) with cover images
    fetch('https://openlibrary.org/subjects/new.json?limit=10')
      .then((response) => response.json())
      .then((data) => {
        // Filter out works with the "romance" genre
        const booksWithoutRomance = data.works
          .filter((work) => !work.subject.includes('/subjects/romance'))
          .filter((work) => work.cover_edition_key) // Filter out works without cover images
          .map((work) => ({
            key: work.cover_edition_key,
            title: work.title,
            cover_i: null, // You can set this to null or fetch cover_i using another API endpoint
          }));
        setBooks(booksWithoutRomance);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const handleScan = (isbn) => {
    setSearchTerm(isbn);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const query = `https://openlibrary.org/search.json?q=${searchTerm}`;
    console.log("Query String: " + query);

    // Fetch the data from the API
    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
        setHasSearched(true);
      })
      .catch((error) => console.error('Error fetching data:', error));

  };

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  const toggleDetails = (book) => {
    setSelectedBook(selectedBook === book ? null : book);
  };

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedBook(null);
  };

  const noCoverImageUrl = 'https://via.placeholder.com/200x300.png'; // Replace with your actual "no cover" image URL

  const sliderSettings = isMobile
  ? {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  : {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };


  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      {!hasSearched && (
        <>
        {/* Include the HeroSection component */}
          <HeroSection />
          <div className="carousel-container">
            <h2>New Books</h2>
            <Slider {...sliderSettings}>
              {books.map((book) => (
                <div key={book.key} className="carousel-item">
                  <img
                    src={`https://covers.openlibrary.org/b/olid/${book.key}-M.jpg`}
                    alt={`Cover for ${book.title}`}
                    className="cover-image"
                  />
                  <p>{book.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
      {hasSearched && books.length === 0 && (
        <p>No books found. Please try a different search term.</p>
      )}
      {hasSearched && books.length > 0 && (
        <div className="carousel-container">
            <ul>
              {currentBooks.map((book) => (
                <li key={book.key} className="book-container">
                    <p><b>{book.title}</b><br />
                    <small>by {book.author_name ? book.author_name.join(', ') : 'Unknown'} | Star Reviews: {book.ratings_average ? Math.round(book.ratings_average * 100) / 100 : 'N/A'} | Edition count: {book.edition_count}</small></p>
                  <div className="book-info">
                    <div className="book-details">
                      {book.cover_i ? (
                        <img
                          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                          alt={`Cover for ${book.title}`}
                          className="cover-image"
                        />
                      ) : (
                        <img
                          src={noCoverImageUrl}
                          alt="No Cover"
                        />
                      )}
                      <div className="book-text">
                        <button onClick={() => toggleDetails(book)}>
                          {selectedBook === book ? 'Hide Details' : 'View Details'}
                        </button>
                        <div>
                          {selectedBook === book && <BookDetails book={book} />}
                        </div>
                      </div>
                      {/* Conditionally render the details based on the button click */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
      )}
      {books.length > itemsPerPage && (
        <nav>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(books.length / itemsPerPage) }).map(
              (_, index) => (
                <li
                  key={index + 1}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => paginate(index + 1)}
                >
                  <a href="#!" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BookList;
