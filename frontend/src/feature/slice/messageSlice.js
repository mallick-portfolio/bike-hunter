import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "modal",
  initialState: {
    item: null,
  },
  reducers: {
    openMessage: (state, action) => {
      state.item = action.payload;
    },
    closeMessage: (state) => {
      state.item = null;
    },
  },
});

export const { openMessage, closeMessage } = messageSlice.actions;

export default messageSlice.reducer;
