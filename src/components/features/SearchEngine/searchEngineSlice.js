import { createSlice } from "@reduxjs/toolkit";

import {
  getMockSearchResults,
  getMockCategoriesList,
  getMockDecisionsList,
  getMockCompaniesList,
  getMockDatesList,
} from "../../../services/thunks/getDataLists.js";

const initialState = {
  isSearchDataLoading: false,
  searchTerm: null,
  categoryValue: null,
  decisionValue: null,
  companyValue: null,
  dateValue: null,
  resultPageSize: 3,
  sortBy: ["Newest", "Oldest"],
  results: [],
  filteredResults: [],
  categoriesList: [],
  decisionsList: [],
  companiesList: [],
  datesList: [],
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
      state.categoryValue = action.payload;
    },
    setDecisionFilter: (state, action) => {
      state.decisionValue = action.payload;
    },
    setCompanyFilter: (state, action) => {
      state.companyValue = action.payload;
    },
    setSelectedDateFilter: (state, action) => {
      state.dateValue = action.payload;
    },
    incrementPagination: (state, action) => {
      const totalPageNumbers = state.results.length / state.resultPageSize;
      const currentPage = state.paginationPageNumber;
      if (currentPage < totalPageNumbers) state.paginationPageNumber++;
    },
    decrementPagination: (state, action) => {
      const currentPage = state.paginationPageNumber;
      state.paginationPageNumber = currentPage > 1 ? currentPage - 1 : 1;
    },
    filterResults: state => {
      const { searchTerm, category, decision, company, selectedDate } = state;
      state.filteredResults = state.results;
      state.filteredResults = state.filteredResults
        .filter(x => (searchTerm ? x.title.toLowerCase().includes(searchTerm.toLowerCase()) : true))
        .filter(x => (category ? x.category === category : true))
        .filter(x => (decision ? x.decision === decision : true))
        .filter(x => (company ? x.company === company : true))
        .filter(x => (selectedDate ? x.selectedDate === selectedDate : true));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMockSearchResults.pending, (state, action) => {
        state.isSearchDataLoading = true;
      })
      .addCase(getMockSearchResults.fulfilled, (state, action) => {
        state.isSearchDataLoading = false;
        state.results = [...action.payload];
        state.filteredResults = state.results;
      })
      .addCase(getMockCategoriesList.fulfilled, (state, action) => {
        state.categoriesList = [...action.payload];
      })
      .addCase(getMockDecisionsList.fulfilled, (state, action) => {
        state.decisionsList = [...action.payload];
      })
      .addCase(getMockCompaniesList.fulfilled, (state, action) => {
        state.companiesList = [...action.payload];
      })
      .addCase(getMockDatesList.fulfilled, (state, action) => {
        state.datesList = [...action.payload];
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
