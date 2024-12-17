import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVerifyModalOpen: false, // Verify modal is initially closed
};

const verifyModalSlice = createSlice({
  name: "verifyModal",
  initialState,
  reducers: {
    openVerifyModal: (state) => {
      state.isVerifyModalOpen = true;
    },
    closeVerifyModal: (state) => {
      state.isVerifyModalOpen = false;
    },
  },
});

// Export actions
export const { openVerifyModal, closeVerifyModal } = verifyModalSlice.actions;

// Export reducer
export default verifyModalSlice.reducer;
