import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  currentMovie: 0,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieInput: (state, action) => {
      state.movies = action.payload;
    },
    setCurrentMovie: (state, action) => {
      console.log(action.payload);
      state.currentMovie = action.payload;
    },
  },
});

export const { movieInput, setCurrentMovie } = movieSlice.actions;
export default movieSlice.reducer;
