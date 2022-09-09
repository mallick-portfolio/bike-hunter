import { configureStore } from "@reduxjs/toolkit";
import deleteReducer from "./slice/deleteSlice.js";
import messageReducer from "./slice/messageSlice.js";
import modalReducer from "./slice/modalSlice.js";

export default configureStore({
  reducer: {
    modal: modalReducer,
    message: messageReducer,
    delete: deleteReducer,
  },
});
