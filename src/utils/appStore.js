import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../storeSlices/userSlice";
import nowPlayingMoviesSlice from "../storeSlices/nowPlayingMovies";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        nowPlayingMovies: nowPlayingMoviesSlice
    }
});

export default appStore;