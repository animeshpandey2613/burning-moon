import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  currentMovie: 0,
  currentSearch: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieInput: (state, action) => {
      state.movies = action.payload;
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    movieSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
});

export const { movieInput, setCurrentMovie, movieSearch } = movieSlice.actions;
export default movieSlice.reducer;
