import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    displayName: null,
    photoURL: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInUser: (state, action) => {
            const newState = {...state, email: action.payload.email, displayName: action.payload.displayName, photoURL: action.payload.photoURL};
            return newState;
        },
        signOutUser: () => {
            return initialState;
        },
        updateUserNameandPhotoUrl: (state, action) => {
            const newState = {...state, displayName: action.payload.displayName, photoURL: action.payload.photoURL};
            return newState;
        }
    }
})

export const {signInUser, signOutUser, updateUserNameandPhotoUrl} = userSlice.actions;

export default userSlice.reducer;