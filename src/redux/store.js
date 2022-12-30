import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthenticationSlice";
import walletReducer from "./slices/walletSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer
    },
  })