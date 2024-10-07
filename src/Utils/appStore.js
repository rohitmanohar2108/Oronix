import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the default export (the reducer)
import moviesReducer from "./moviesSlice";
import wishlistReducer from './wishListSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use userReducer instead of useReducer
    movies : moviesReducer,
    wishlist: wishlistReducer,
  },
});


 
export default appStore;
