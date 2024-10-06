import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the default export (the reducer)
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use userReducer instead of useReducer
    movies : moviesReducer,
  },
});

export default appStore;
