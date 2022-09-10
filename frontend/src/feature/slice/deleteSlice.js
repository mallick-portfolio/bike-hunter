import { createSlice } from "@reduxjs/toolkit";

export const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    data: null,
  },
  reducers: {
    deleteMessage: (state, action) => {
      state.data = action.payload;
    },
    closeDelete: (state) => {
      state.data = null;
    },
  },
});

export const { deleteMessage, closeDelete } = deleteSlice.actions;

export default deleteSlice.reducer;
