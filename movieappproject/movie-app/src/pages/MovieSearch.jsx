import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from "../features/movieSlice";


import './MovieSearch.css';

function MovieSearch() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector(state => state.movies);
    console.log(movies)
    console.log(loading)

    const handleSearch = () => {
        if (!query) return;
        dispatch(fetchMovies(query));
    };

    return (
        <div className="search-container">
            <h2>Search Movies</h2>
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter movie name..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.imdbID} className="movie-card">
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150x225?text=No+Image"}
                            alt={movie.Title}
                        />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieSearch;
