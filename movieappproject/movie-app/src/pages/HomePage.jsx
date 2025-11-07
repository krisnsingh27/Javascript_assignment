import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../features/movieSlice';
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);


  const movieKeywords = [
    'titanic',
    'avenger',
    'border',
    'superman',
    'war',
    'hanuman',
    'ms dhoni the untold story'
  ];

  useEffect(() => {
    movieKeywords.forEach(keyword => {
      dispatch(fetchMovies(keyword));
    });
  }, [dispatch]);

  console.log(movieKeywords)

  return (
    <div className="home-container">
      <h2>Popular Movies</h2>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={
                movie.Poster !== 'N/A'
                  ? movie.Poster
                  : 'https://via.placeholder.com/150x225?text=No+Image'
              }
              alt={movie.Title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150x225?text=No+Image'
              }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
