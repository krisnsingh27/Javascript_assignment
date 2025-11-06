
// const API_KEY = "b0dbbf22";
// const BASE_URL = "https://www.omdbapi.com/";

// export const fetchMovieById = async (id) => {
//   const res = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
//   return res.json();
// };

// export const searchMovies = async (query) => {
//   const res = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
//   return res.json();
// };

// src/api/omdbApi.js
import axios from "axios";
const API_KEY = "b0dbbf22";

export const searchMovies = async (query) => {
  const res = await axios.get(`https://www.omdbapi.com/?s=${query || "batman"}&apikey=${API_KEY}`);
  return res.data.Search || [];
};

export const fetchMovieById = async (id) => {
  const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
  return res.data;
};
