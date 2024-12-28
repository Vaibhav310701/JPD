import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store"; // Adjust the import path based on your project structure

interface Loader {
  loading: boolean;
}

const initialState: Loader = {
  loading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loaderSlice.actions;

// Function to set loading to true for 3 seconds
export const setLoadingForThreeSeconds = () => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000); // 3 seconds
  };

export default loaderSlice.reducer;
