import { configureStore } from '@reduxjs/toolkit';
import alertReducer from "./features/modal/alertSlice";
export const store = configureStore({
  reducer: {
  
    alert: alertReducer,
  },
});