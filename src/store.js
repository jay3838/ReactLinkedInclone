import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./userSlice";


export default configureStore({
  reducer: {
    app:appReducer,
  },
});
