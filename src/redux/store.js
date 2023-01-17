import { configureStore } from "@reduxjs/toolkit";
import searchResultsSlice from "../slices/searchResultsSlice";

export const store = configureStore({
    reducer: {
        searchResults: searchResultsSlice,
    }
});

