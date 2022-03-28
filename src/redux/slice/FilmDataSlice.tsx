import { createSlice } from "@reduxjs/toolkit";
import { fetchDataHome } from "../actions/filmDataActions";
const initialState = {
  loading:false,
  filmOnCarousel: [],
  popularTv: [],
  popularMovie: [],
  anime: [],
  movieTrending: [],
  tvTrending: [],
  filmDetaileData:{
    listTrailer:[],
    listActor:[],
    listImage:[]
  }
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
      state.loading = false;
    }).addCase(fetchDataHome.pending,(state,action) => {
           state.loading = true;
    }).addCase(fetchDataHome.rejected,(state,action) => {
      state.loading = false;
});
  },
});
export const { reducer: filmDataReducer } = filmDataSlice;
export const { actions: filmDataActions } = filmDataSlice;
