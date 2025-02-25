import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import planetReducer from "./planetSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    planets: planetReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch
