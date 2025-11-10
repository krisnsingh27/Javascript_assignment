// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMovies } from '../features/movieSlice';
// import './HomePage.css';

// function HomePage() {
//   const dispatch = useDispatch();
//   const { movies, loading, error } = useSelector(state => state.movies);


//   const movieKeywords = [
//     'titanic',
//     'avenger',
//     'border',
//     'superman',
//     'war',
//     'hanuman',
//     'ms dhoni the untold story'
//   ];

//   useEffect(() => {
//     movieKeywords.forEach(keyword => {
//       dispatch(fetchMovies(keyword));
//     });
//   }, [dispatch]);

//   console.log(movieKeywords)

//   return (
//     <div className="home-container">
//       <h2>Popular Movies</h2>

//       {loading && <p>Loading movies...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div className="movies-grid">
//         {movies.map(movie => (
//           <div key={movie.imdbID} className="movie-card">
//             <img
//               src={
//                 movie.Poster !== 'N/A'
//                   ? movie.Poster
//                   : 'https://via.placeholder.com/150x225?text=No+Image'
//               }
//               alt={movie.Title}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = 'https://via.placeholder.com/150x225?text=No+Image'
//               }}
//             />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import React, { useEffect, useState } from 'react';
import './HomePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const navigate=useNavigate()

  const movieKeywords = [
    'titanic',
    'avenger',
    'border',
    'superman',
    'war',
    'hanuman',
    'ms dhoni the untold story',
    
    
  ];

  const API_KEY = '805bbb15'; 
  const BASE_URL = 'https://www.omdbapi.com/';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const allMovies = [];

        
        for (const keyword of movieKeywords) {
          const searchRes = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${keyword}`);
          if (searchRes.data.Response === 'True') {
            
            const detailPromises = searchRes.data.Search.map((m) =>
              axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${m.imdbID}`)
            );
            const detailResults = await Promise.all(detailPromises);
            detailResults.forEach((res) => {
              if (res.data && res.data.Response === 'True') {
                allMovies.push(res.data);
              }
            });
          }
        }

        
        const uniqueMovies = allMovies.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.imdbID === movie.imdbID)
        );

        setMovies(uniqueMovies);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to load movies. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

 
  const allGenres = ['All', ...new Set(
    movies.flatMap((movie) =>
      movie.Genre ? movie.Genre.split(',').map((g) => g.trim()) : []
    )
  )];


  const filteredMovies = movies.filter((movie) => {
    if (selectedGenre === 'All') return true;
    return movie.Genre && movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase());
  });

  return (
    <div className="home-container">
      <h2>Popular Movies</h2>

    
      <div className="filter-container">
        <label htmlFor="genre-select">Filter by Genre:</label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="movies-grid">
        {filteredMovies.length === 0 && !loading && (
          <p>No movies found for genre: {selectedGenre}</p>
        )}

        {filteredMovies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={
                movie.Poster !== 'N/A'
                  ? movie.Poster
                  : 'https://via.placeholder.com/150x225?text=No+Image'
              }
               onClick={() => navigate(`/movie/${movie.imdbID}`)}
              alt={movie.Title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150x225?text=No+Image';
              }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p className="genre">{movie.Genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;



