// src/components/BookDetails.js
import React, { useState } from 'react';
import StarRating from './StarRating';

const BookDetails = ({ book, isVisible }) => {
  const { publish_date, publisher, language } = book;

  return (
    <div className="book-details-transition">
      {/* <h3>{book.title}</h3>
      by {book.author_name ? book.author_name.join(', ') : 'N/A'} */}
      <p>{book.first_sentence || 'N/A'}</p>
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
      <div className="book-details-row">
        <div className="book-publication">
          <p><span>ISBN:</span><br /> {book.isbn ? book.isbn[0] : 'N/A'}</p>
        </div>
        <div className="book-publication">
          <p><span>Edition:</span><br /> {book.edition_key ? book.edition_key[0] : 'N/A'}</p>
        </div>
        <div className="book-publication">
          <p><span>Number of Pages:</span><br /> {book.number_of_pages_median + ' ' || 'N/A'}</p>
        </div>
      </div>
      <p>Genres: <small>{book.subject ? book.subject.join(', ') : 'N/A'}</small></p>
      <p>Tags: <small>{book.subject ? book.subject.join(', ') : 'N/A'}</small></p>
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
