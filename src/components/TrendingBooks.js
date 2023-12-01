// TrendingBooks.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BookDetails from './BookDetails'; // Import your BookDetails component

const TrendingBooks = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const targetSubject = 'Romance';

  useEffect(() => {
    // Fetch data from the Open Library API for trending books with cover images
    fetch('https://openlibrary.org/subjects/popular.json?limit=10')
      .then((response) => response.json())
      .then((data) => {
        const subjects = data.works
        const trendingBooksData = data.works
          .filter((work) => !work.subject.includes(targetSubject))
          .filter((work) => work.cover_edition_key)
          .map((work) => ({
            key: work.cover_edition_key,
            title: work.title,
            cover_i: null, // You can set this to null or fetch cover_i using another API endpoint
            subjects: work.subject || []
          }));
          console.log(trendingBooksData);
        setTrendingBooks(trendingBooksData);
      })
      .catch((error) => console.error('Error fetching trending books data:', error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="carousel-container">
      <h2>Trending Books</h2>
      <Slider {...sliderSettings}>
        {trendingBooks.map((book) => (
          <div key={book.key} className="carousel-item">
            <img
              src={`https://covers.openlibrary.org/b/olid/${book.key}-M.jpg`}
              alt={`Cover for ${book.title}`}
              className="cover-image"
              onClick={() => handleViewDetails(book)}
            />
            <p>{book.title}</p>
          </div>
        ))}
      </Slider>
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default TrendingBooks;
