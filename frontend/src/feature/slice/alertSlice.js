import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.message = action.payload;
    },
    closeModal: (state) => {
      state.message = null;
    },
  },
});

export const { openModal, closeModal } = alertSlice.actions;

export default alertSlice.reducer;
