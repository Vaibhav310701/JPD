import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignInOpen: false, // Sign-in modal is initially closed
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    openSignIn: (state) => {
      state.isSignInOpen = true;
    },
    closeSignIn: (state) => {
      state.isSignInOpen = false;
    },
  },
});

// Export actions
export const { openSignIn, closeSignIn } = signInSlice.actions;

// Export reducer
export default signInSlice.reducer;
