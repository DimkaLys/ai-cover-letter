import { createSlice } from "@reduxjs/toolkit";

const lettersSlice = createSlice({
  name: "letters",
  initialState: {
    letters: [],
    loading: false,
    error: null,
  },
  reducers: {
    addLetter: (state, action) => {
      state.letters.unshift(action.payload);
    },
    clearHistory: (state) => {
      state.letters = [];
    },
  },
});

export const { addLetter, clearHistory } = lettersSlice.actions;
export default lettersSlice.reducer;
