import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import verifyModalReducer from "./slices/verifyModalSlice";
import signInReducer from "./slices/signInSlice";
import formDataReducer from '../redux/slices/formDataSlice'
import loader from "../redux/slices/loader";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    login: loginReducer, // Key 'login' with its reducer
    verifyModal: verifyModalReducer,
    signIn: signInReducer,
    formData: formDataReducer,
    loader: loader
  },
});
