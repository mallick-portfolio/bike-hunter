import { createSlice } from "@reduxjs/toolkit";

export const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    data: null,
  },
  reducers: {
    openMessage: (state, action) => {
      state.data = action.payload;
    },
    closeMessage: (state, action) => {
      state.data = null;
    },
  },
});

export const { openMessage, closeMessage } = deleteSlice.actions;

export default deleteSlice.reducer;
