import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies:[]
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieInput: (state, action) => {
      const newMovies = action.payload;
      state.movies = newMovies;
    }
  },
});

export const { movieInput } = MovieSlice.actions;
export default MovieSlice.reducer;