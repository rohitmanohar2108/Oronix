import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the default export (the reducer)

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use userReducer instead of useReducer
  },
});

export default appStore;
