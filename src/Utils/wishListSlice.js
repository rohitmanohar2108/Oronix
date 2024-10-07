import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    movies: [],
  },
  reducers: {
    addWishlist: (state, action) => {
      const movie = action.payload;
      const exists = state.movies.some((m) => m.id === movie.id);
      if (!exists) {
        state.movies.push(movie);
      }
    },
    removeFromWishlist: (state, action) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload.id);
    },
  },
});

export const { addWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
