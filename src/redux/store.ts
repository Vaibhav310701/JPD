import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import verifyModalReducer from "./slices/verifyModalSlice";
import signInReducer from "./slices/signInSlice";
import selectedTypeSlice from "../redux/slices/selectedTypeSlice";
import resdentialTypeSlice from "../redux/slices/resdentialTypeSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    login: loginReducer, // Key 'login' with its reducer
    verifyModal: verifyModalReducer,
    signIn: signInReducer,
    selectType: selectedTypeSlice,
    resdentialType: resdentialTypeSlice,
  },
});
