import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GenreSection = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genres from the Open Library API
    fetch('https://openlibrary.org/subjects.json')
      .then((response) => response.json())
      .then((data) => {
        // Extract genre names from the API response
        const genreNames = data.subjects.map((subject) => subject.name);
        setGenres(genreNames);
      })
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  return (
    <div className="genre-section">
      <h2>Explore Genres</h2>
      <ul className="genre-list">
        {genres.map((genre) => (
          <li key={genre}>
            <Link to={`/books?genre=${genre.toLowerCase()}`}>
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSection;