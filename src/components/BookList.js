import React, { useState } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust the number of items per page as needed

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchTerm}`
      );
      setBooks(response.data.docs);
      setCurrentPage(1); // Reset to the first page when a new search is performed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    fetchData();
  };

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Search Books</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter your search query"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <ul>
        {currentBooks.map((book) => (
          <li key={book.key}>
            <h3>{book.title}</h3>
            {book.cover_i && (
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover for ${book.title}`}
              />
            )}
            <button onClick={() => handleViewDetails(book)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
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
      {selectedBook && (
        <div>
          <BookDetails book={selectedBook} />
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default BookList;
