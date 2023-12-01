// ChildrensBooks.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChildrensBooks = () => {
  const [childrensBooks, setChildrensBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the Open Library API for children's books with cover images
    fetch('https://openlibrary.org/subjects/children.json?limit=10')
      .then((response) => response.json())
      .then((data) => {
        const childrensBooksData = data.works
          .filter((work) => work.cover_edition_key)
          .map((work) => ({
            key: work.cover_edition_key,
            title: work.title,
            cover_i: null, // You can set this to null or fetch cover_i using another API endpoint
          }));
        setChildrensBooks(childrensBooksData);
      })
      .catch((error) => console.error('Error fetching children\'s books data:', error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <h2>Children's Books</h2>
      <Slider {...sliderSettings}>
        {childrensBooks.map((book) => (
          <div key={book.key} className="carousel-item">
            <img
              src={`https://covers.openlibrary.org/b/olid/${book.key}-M.jpg`}
              alt={`Cover for ${book.title}`}
              className="cover-image"
            />
            <p>{book.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ChildrensBooks;
