import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchEngineSlice from "./components/features/SearchEngine/searchEngineSlice.js";

const rootReducer = combineReducers({ searchEngineDta: searchEngineSlice });

export const store = configureStore({
  reducer: { rootReducer },
});
