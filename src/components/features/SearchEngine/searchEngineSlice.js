import { createSlice } from "@reduxjs/toolkit";

import {
  getMockSearchResults,
  getMockCategoriesLists,
  getMockDecisionsLists,
  getMockCompaniesLists,
  getMockDatesLists,
} from "../../../services/thunks/getDataLists.js";

const initialState = {
  isSearchDataLoading: false,
  searchTerm: null,
  category: null,
  decision: null,
  company: null,
  selectedDate: null,
  resultPageSize: 3,
  sortBy: ["Newest", "Oldest"],
  results: [],
  categoriesLists: [],
  decisionsLists: [],
  companiesLists: [],
  datesLists: [],
  paginationPageNumber: 1,
};

const searchEngineSlice = createSlice({
  name: "searchEngineData",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.category;
    },
    setDecisionFilter: (state, action) => {
      state.category = action.category;
    },
    setCompanyFilter: (state, action) => {
      state.category = action.category;
    },
    setSelectedDateFilter: (state, action) => {
      state.category = action.category;
    },
    incrementPagination: state => {
      const totalPageNumbers = state.results.length / state.resultPageSize;
      const currentPage = state.paginationPageNumber;
      if (currentPage < totalPageNumbers) state.paginationPageNumber++;
    },
    decrementPagination: state => {
      const currentPage = state.paginationPageNumber;
      state.paginationPageNumber = currentPage > 1 ? state.paginationPageNumber-- : 1;
    },
    filterResults: state => {
      const { searchTerm, category, decision, company, selectedDate } = state;
      if (searchTerm) state.results.filter(x => x.title.includes(searchTerm));
      if (category) state.results.filter(x => (x.category = category));
      if (decision) state.results.filter(x => (x.decision = decision));
      if (company) state.results.filter(x => (x.company = company));
      if (selectedDate) state.results.filter(x => (x.selectedDate = selectedDate));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMockSearchResults.pending, state => {
        state.isSearchDataLoading = true;
      })
      .addCase(getMockSearchResults.fulfilled, (state, action) => {
        state.results = action.payload;
        state.resultPageSize = action.payload.length;
        state.isSearchDataLoading = false;
      })
      .addCase(getMockCategoriesLists.fulfilled, (state, action) => {
        state.categoriesLists = action.payload;
      })
      .addCase(getMockDecisionsLists.fulfilled, (state, action) => {
        state.decisionsLists = action.payload;
      })
      .addCase(getMockCompaniesLists.fulfilled, (state, action) => {
        state.companiesLists = action.payload;
      })
      .addCase(getMockDatesLists.fulfilled, (state, action) => {
        state.datesLists = action.payload;
      });
  },
});

export const {
  setSearchTerm,
  setCategoryFilter,
  setDecisionFilter,
  setCompanyFilter,
  setSelectedDateFilter,
  incrementPagination,
  decrementPagination,
  filterResults,
} = searchEngineSlice.actions;

export default searchEngineSlice.reducer;
