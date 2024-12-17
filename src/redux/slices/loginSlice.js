import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.isOpen = true;
    },
    closeLogin: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openLogin, closeLogin } = loginSlice.actions;
export default loginSlice.reducer; // Export the reducer
