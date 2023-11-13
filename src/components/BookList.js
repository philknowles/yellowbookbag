// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';
import BookReviews from './BookReviews';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://openlibrary.org/subjects/family-friendly.json'
        );
        // Assuming the API response includes a rating property
        // Modify accordingly based on the actual API response
        const booksWithRating = response.data.works.map((book) => ({
          ...book,
          rating: Math.random() * 5, // Example rating (replace with actual rating if available)
        }));
        setBooks(booksWithRating);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedBook(null); // Clear selected book when a new search term is entered
  };

  const isFamilyFriendly = (book) => {
    // Add your family-friendly criteria here
    // For simplicity, this example assumes all books are family-friendly.
    return true;
  };

  const filteredBooks = books
    .filter((book) => isFamilyFriendly(book))
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <h2>Family-Friendly Books</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.key} onClick={() => handleBookClick(book)}>
            {book.title}
          </li>
        ))}
      </ul>
      {selectedBook && (
        <div>
          <BookDetails book={selectedBook} />
          {/* Add book reviews component here */}
          {/* <BookReviews reviews={selectedBook.reviews} /> */}
        </div>
      )}
    </div>
  );
};

export default BookList;
