// src/components/BookDetails.js
import React from 'react';
import StarRating from './StarRating';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author_name}</p>
      <p>First Published: {book.first_publish_year}</p>
      {book.rating && (
        <div>
          <p>Rating: {book.rating.toFixed(1)}</p>
          <StarRating rating={book.rating} />
        </div>
      )}
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;
