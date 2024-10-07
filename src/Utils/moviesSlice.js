import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null, // Use a key that matches what you intend to access
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    airingTodayTvSeries: null,
    popularTvSeries: null,
    onTheAir: null,
    topRatedTvSeries: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // Assign movies to nowPlayingMovies
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload; // Assign movies to nowPlayingMovies
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload; // Assign movies to nowPlayingMovies
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload; // Assign movies to nowPlayingMovies
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addAiringTodayTvSeries: (state, action) => {
      state.airingTodayTvSeries = action.payload;
    },
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addAiringTodayTvSeries,
  addPopularTvSeries,
  addOnTheAir,
  addTopRatedTvSeries,
} = moviesSlice.actions;

export default moviesSlice.reducer;


