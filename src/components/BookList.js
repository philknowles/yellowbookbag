// BookList.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookDetails from './BookDetails';
import Navbar from './Navbar';
import './Modal.css';
import './BookList.css'; // Import the new CSS file

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // Fetch 10 books for the carousel on initial load
    const carouselQuery = `https://openlibrary.org/search.json?limit=10`;
    fetch(carouselQuery)
      .then((response) => response.json())
      .then((data) => setBooks(data.docs))
      .catch((error) => console.error('Error fetching carousel data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const query = `https://openlibrary.org/search.json?q=${searchTerm}`;

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

  const noCoverImageUrl = 'https://via.placeholder.com/150x200.png'; // Replace with your actual "no cover" image URL

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      {hasSearched && books.length === 0 && (
        <p>No books found. Please try a different search term.</p>
      )}
      {books.length > 0 && (
        <>
          <h2>Featured Books</h2>
            <Slider {...sliderSettings}>
              {books.map((book) => (
                <div key={book.key} className="carousel-item">
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={`Cover for ${book.title}`}
                  />
                  <p>{book.title}</p>
                </div>
              ))}
            </Slider>
            <ul>
              {currentBooks.map((book) => (
                <li key={book.key} className="book-container">
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <div className="book-details">
                      {book.cover_i ? (
                        <img
                          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                          alt={`Cover for ${book.title}`}
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
        </>
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
