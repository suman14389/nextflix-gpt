import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../storeSlices/userSlice";
import nowPlayingMoviesSlice from "../storeSlices/nowPlayingMovies";
import gptSlice from "../storeSlices/GptSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        nowPlayingMovies: nowPlayingMoviesSlice,
        gpt: gptSlice
    }
});

export default appStore;