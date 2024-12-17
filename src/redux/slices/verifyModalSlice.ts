import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface OtpState {
  otp: number;
  isVerifyModalOpen: boolean;
}


const initialState: OtpState = {
  otp: 0, 
  isVerifyModalOpen: false, 
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
  
    setOtp: (state, action: PayloadAction<number>) => {
      state.otp = action.payload;
    },
  },
});

// Export actions
export const { openVerifyModal, closeVerifyModal, setOtp } = verifyModalSlice.actions;

// Export reducer
export default verifyModalSlice.reducer;
