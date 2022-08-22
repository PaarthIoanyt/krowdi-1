import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// export const loginFunction=createAsyncThunk(
//   "loginFunction",
//   async(email,password)=>{
//     const response= await axios.get(
//       `https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/login`,{params:{email:email,password:password}}
//       );
//      return response.data;
//   }
// );
const initialState = {
  isOpen: false,
  isOpen1: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlertCorrect: (state, action) => {
      state.isOpen = true;
    },
    closeAlertCorrect: (state, action) => {
      state.isOpen = false;
    },
    openAlertWrong: (state, action) => {
      state.isOpen1 = true;
    },
    closeAlertWrong: (state, action) => {
      state.isOpen1 = false;
    },
  },
});

export const {
  openAlertCorrect,
  closeAlertCorrect,
  openAlertWrong,
  closeAlertWrong,
} = alertSlice.actions;

export default alertSlice.reducer;
