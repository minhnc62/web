import { configureStore } from "@reduxjs/toolkit";
import  movieReducer  from "./movieSlide";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
