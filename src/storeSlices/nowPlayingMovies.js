
import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
    name: "nowPlayingMovies",
    initialState: {
        nowPlayingMovies: null,
        trailerMovieDetails: null,
        trailerVideoDetails: null,
        otherMovies: {
            popularMovies: {
                name: "Popular",
                movies: null,
                key: "popular"
            },
            topRatedMovies: {
                name: "Top Rated",
                movies: null,
                key: "top_rated"
            },
            upcomingMovies: {
                name: "Upcoming",
                movies: null,
                key: "upcoming"
            }
        }
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
        },
        addPopularMovies: (state, action) => {
            state.otherMovies.popularMovies.movies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.otherMovies.topRatedMovies.movies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.otherMovies.upcomingMovies.movies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerMovieDetails, addTrailerVideoDetails, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;