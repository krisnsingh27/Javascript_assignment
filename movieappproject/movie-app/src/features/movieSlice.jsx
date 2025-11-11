import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '3a125f13';


export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      if (response.data.Search) {
        localStorage.setItem('movies', JSON.stringify(response.data.Search));
        return response.data.Search;
      } else {
        return rejectWithValue('No movies found');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: JSON.parse(localStorage.getItem('movies')) || [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.movies = [];
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
