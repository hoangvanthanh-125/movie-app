import { createSlice } from "@reduxjs/toolkit";
import { fetchDataHome } from "../actions/filmDataActions";
const initialState = {
  filmOnCarousel: [],
  popularTv: [],
  popularMovie: [],
  anime: [],
  movieTrending: [],
  tvTrending: [],
};
const filmDataSlice = createSlice({
  name: "filmData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataHome.fulfilled, (state, action) => {
      const {
        anime,
        filmOnCarousel,
        popularMovie,
        popularTv,
        movieTrending,
        tvTrending,
      } = action?.payload;
      state.filmOnCarousel = filmOnCarousel;
      state.popularMovie = popularMovie;
      state.popularTv = popularTv;
      state.anime = anime;
      state.movieTrending = movieTrending;
      state.tvTrending = tvTrending;
    });
  },
});
export const { reducer: filmDataReducer } = filmDataSlice;
export const { actions: filmDataActions } = filmDataSlice;
