import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    language: "English",
    tome: "formal",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTone: (state, action) => {
      state.tone = action.payload;
    },
  },
});

export const { setLanguage, setTone } = settingsSlice.actions;
export default settingsSlice.reducer;
