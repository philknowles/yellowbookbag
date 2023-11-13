import React, { useState } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchTerm}`
      );
      setBooks(response.data.docs);
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

  return (
    <div>
      <h2>Search Books</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <ul>
        {books.map((book) => (
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
