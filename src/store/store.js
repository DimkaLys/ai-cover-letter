import { configureStore } from "@reduxjs/toolkit";
import lettersReduser from "./slices/lettersSlice";
import settingsReducer from "./slices/settingsSlice";

const store = configureStore({
  reducer: {
    letters: lettersReduser,
    settings: settingsReducer,
  },
});

export default store;
