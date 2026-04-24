import { createSlice } from "@reduxjs/toolkit";

const savedLetters = localStorage.getItem("letters");

const lettersSlice = createSlice({
  name: "letters",
  initialState: {
    letters: savedLetters ? JSON.parse(savedLetters) : [],
    loading: false,
    error: null,
  },
  reducers: {
    addLetter: (state, action) => {
      state.letters.unshift(action.payload);
      localStorage.setItem("letters", JSON.stringify(state.letters));
    },
    clearHistory: (state) => {
      state.letters = [];
      localStorage.removeItem("letters");
    },
  },
});

export const { addLetter, clearHistory } = lettersSlice.actions;
export default lettersSlice.reducer;
