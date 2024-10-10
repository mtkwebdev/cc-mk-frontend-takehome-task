import { configureStore } from "@reduxjs/toolkit";
import searchEngineSlice from "./components/features/SearchEngine/searchEngineSlice.js";

export const store = configureStore({
  reducer: { searchEngineData: searchEngineSlice },
});
