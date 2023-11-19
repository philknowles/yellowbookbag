// src/components/BookDetails.js
import React from 'react';
import StarRating from './StarRating';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
      <p>Publication Date: {book.publish_date || 'N/A'}</p>
      <p>Publisher: {book.publisher ? book.publisher[0] : 'N/A'}</p>
      <p>ISBN: {book.isbn ? book.isbn[0] : 'N/A'}</p>
      <p>Edition: {book.edition_key ? book.edition_key[0] : 'N/A'}</p>
      <p>Number of Pages: {book.number_of_pages + ', ' || 'N/A'}</p>
      <p>Language: {book.language ? book.language[0] : 'N/A'}</p>
      <p>Genres: {book.subject ? book.subject.join(', ') : 'N/A'}</p>
      <p>Tags: {book.subject ? book.subject.join(', ') : 'N/A'}</p>
      <p>Description: {book.description || 'N/A'}</p>
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
