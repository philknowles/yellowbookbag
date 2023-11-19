// src/components/BookDetails.js
import React, { useState } from 'react';
import StarRating from './StarRating';

const BookDetails = ({ book, isVisible }) => {
  const { publish_date, publisher, language } = book;

  return (
    <div className="book-details-transition">
      <h3>{book.title}</h3>
      by {book.author_name ? book.author_name.join(', ') : 'N/A'}
      <div className="book-details-row">
        <div className="book-publication">
          <p><span>Publication Date:</span><br /> {publish_date ? publish_date[0] || 'N/A' : 'N/A'}</p>
        </div>
        <div className="book-publication">
          <p><span>Publisher:</span><br /> {publisher ? publisher[0] : 'N/A'}</p>
        </div>
        <div className="book-publication">
          <p><span>Language:</span><br /> {language && language[0] == 'eng' ? 'English' : 'N/A'}</p>
        </div>
      </div>
      <p>ISBN: {book.isbn ? book.isbn[0] : 'N/A'}</p>
      <p>Edition: {book.edition_key ? book.edition_key[0] : 'N/A'}</p>
      <p>Number of Pages: {book.number_of_pages + ', ' || 'N/A'}</p>
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
