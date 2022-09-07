import { configureStore } from "@reduxjs/toolkit";
import  modalReducer  from "./slice/modalSlice.js";

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
});
