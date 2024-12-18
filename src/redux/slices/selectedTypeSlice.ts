import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface SelectionState {
  agricultural: boolean;
  commercial: boolean;
  residential: boolean;
}

// Set the initial state with correct types
const initialState: SelectionState = {
  agricultural: false,
  commercial: false,
  residential: false,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    openAgricultural: (state) => {
      state.agricultural = true;
      state.commercial = false;
      state.residential = false;
    },
    openCommercial: (state) => {
      state.agricultural = false;
      state.commercial = true;
      state.residential = false;
    },
    openResidential: (state) => {
      state.agricultural = false;
      state.commercial = false;
      state.residential = true;
    },
    closeAll: (state) => {
      state.agricultural = false;
      state.commercial = false;
      state.residential = false;
    },
  },
});

// Export actions
export const { openAgricultural, openCommercial, openResidential, closeAll } = selectionSlice.actions;

// Export reducer
export default selectionSlice.reducer;
