import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResidentailState {
  flat: boolean;
  villa: boolean;
  plot: boolean;
}

const initialState: ResidentailState = {
  flat: false,
  villa: false,
  plot: false,
};

const residentialSlice = createSlice({
  name: "residential",
  initialState,
  reducers: {
    openFlatType: (state) => {
      state.flat = true;
      state.villa = false;
      state.plot = false;
    },
    openVillaType: (state) => {
      state.flat = false;
      state.villa = true;
      state.plot = false;
    },
    openPlotType: (state) => {
      state.flat = false;
      state.villa = false;
      state.plot = true;
    },
  },
});

export const { openFlatType, openVillaType, openPlotType } =
  residentialSlice.actions;
export default residentialSlice.reducer;
