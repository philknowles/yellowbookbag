// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ books, isMobile }) => {
  const sliderSettings = isMobile
    ? {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        {books.map((book) => (
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

export default SliderComponent;
