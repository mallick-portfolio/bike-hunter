import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slice/alertSlice.js";
import messageReducer from "./slice/messageSlice.js";
import modalReducer from "./slice/modalSlice.js";

export default configureStore({
  reducer: {
    modal: modalReducer,
    alert: alertReducer,
    message: messageReducer,
  },
});
