// BookList.js
import React, { useState } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';
import Modal from './Modal';
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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchTerm}`
      );
      setBooks(response.data.docs);
      setCurrentPage(1);
      setSelectedBook(null);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchData();
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
        <ul>
          {currentBooks.map((book) => (
            <li key={book.key} className="book-container">
              <div className="book-info">
                <h3>{book.title}</h3>
                <div className="book-details">
                  {book.cover_i ? (
                    <img
                      src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={`Cover for ${book.title}`}
                    />
                  ) : (
                    <img
                      src={noCoverImageUrl}
                      alt="No Cover"
                    />
                  )}
                  <div class="book-text">
                    <button onClick={() => toggleDetails(book)}>
                      {selectedBook === book ? 'Hide Details' : 'View Details'}
                    </button>
                    {selectedBook === book && <BookDetails book={book} />}
                    {/* Conditionally render the details based on the button click */}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
