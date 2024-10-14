import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        isGptPage: false,
        gptMovies: {
            gptMovieNames: null,
            gptMoviesDetails: null
        }
        
    },
    reducers: {
        toggleGptPage: (state) => {
            state.isGptPage = !state.isGptPage;
        },
        updateGptSearchResults: (state, action) => {
            state.gptMovies = action.payload;
        }
    }
})

export const { toggleGptPage, updateGptSearchResults } = gptSlice.actions;

export default gptSlice.reducer;