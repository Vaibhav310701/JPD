import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface SignInState {
  isSignInOpen: boolean;
  username: string;
}

// Set the initial state with correct types
const initialState: SignInState = {
  isSignInOpen: false, // Sign-in modal is initially closed
  username: '', // Default empty string for username
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
    // New reducer to set the username
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Export actions
export const { openSignIn, closeSignIn, setUsername } = signInSlice.actions;

// Export reducer
export default signInSlice.reducer;
