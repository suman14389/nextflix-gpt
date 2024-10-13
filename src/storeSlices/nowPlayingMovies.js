
import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
    name: "nowPlayingMovies",
    initialState: {
        nowPlayingMovies: null,
        trailerMovieDetails: null,
        trailerVideoDetails: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerMovieDetails: (state, action) => {
            state.trailerMovieDetails = action.payload;
        }, 
        addTrailerVideoDetails: (state, action) => {
            state.trailerVideoDetails = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerMovieDetails, addTrailerVideoDetails} = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;