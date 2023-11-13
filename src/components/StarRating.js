// src/components/StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const renderStars = (count, type) => {
    const starType = type === 'full' ? '★' : type === 'half' ? '½' : '☆';
    return Array(count).fill(starType).join('');
  };

  return (
    <div>
      {renderStars(fullStars, 'full')}
      {renderStars(halfStars, 'half')}
      {renderStars(emptyStars, 'empty')}
    </div>
  );
};

export default StarRating;
