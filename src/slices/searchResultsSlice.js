import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  search: "",
};

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.arr = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
});

export const { setSearchResults, setSearch } = searchResultsSlice.actions;

// Selectors
// export const selectSearchResults = async (state) => await state.searchResults.arr;
export const selectSearch = async (state) => await state.searchResults.search;

export default searchResultsSlice.reducer;
