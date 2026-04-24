import { configureStore } from "@reduxjs/toolkit";
import lettersSlice from "./slices/lettersSlice";
import settingsSlice from "./slices/settingsSlice";

const store = configureStore({
  reducer: {
    letters: lettersSlice,
    settings: settingsSlice,
  },
});

export default store;
