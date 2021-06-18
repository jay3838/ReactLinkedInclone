import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user:null,
    selectimage:null,
    loding:false,
    
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    selectimage: (state, action) => {
      state.selectimage = action.payload;
    },
    resetimage: (state) => {
      state.selectimage = null;
    },
    selectloding:(state,action) =>{
      state.loding = action.payload;
    }
  

  


}});

export const { login,logout,selectimage,resetimage,selectloding} = appSlice.actions;

export const selectuser = (state) => state.app.user;
export const selectSelectimage = (state) => state.app.selectimage;
export const selectseloding = (state) => state.app.loding;
;

export default appSlice.reducer;
