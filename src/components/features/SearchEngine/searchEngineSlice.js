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
  selectedCategory: null,
  selectedDecision: null,
  selectedCompany: null,
  selectedDate: null,
  resultsPageData: {
    currentPage: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 15, 20],
    lastPageNumber: 4,
    firstResultIndex: 0,
    sortBy: [
      { text: "Newest", value: "1" },
      { text: "Oldest", value: 2 },
    ],
  },
  searchResults: [],
  filteredSearchResults: [],
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
      state.selectedCategory = action.payload;
    },
    setDecisionFilter: (state, action) => {
      state.selectedDecision = action.payload;
    },
    setCompanyFilter: (state, action) => {
      state.selectedCompany = action.payload;
    },
    setSelectedDateFilter: (state, action) => {
      state.selectedDate = action.payload;
    },
    filterResults: (state, action) => {
      const { searchTerm, selectedCategory, selectedDecision, selectedCompany, selectedDate } = state;
      state.filteredSearchResults = [...state.searchResults];
      state.filteredSearchResults = state.filteredSearchResults
        .filter(x => (searchTerm ? x.title.toLowerCase().includes(searchTerm.toLowerCase()) : true))
        .filter(x => (selectedCategory ? x.category === selectedCategory : true))
        .filter(x => (selectedDecision ? x.decision === selectedDecision : true))
        .filter(x => (selectedCompany ? x.company === selectedCompany : true))
        .filter(x => (selectedDate ? x.date === selectedDate : true));
    },
    clearAllFilters: (state, action) => {
      state.searchTerm = "";
      state.selectedCategory = null;
      state.selectedDecision = null;
      state.selectedCompany = null;
      state.selectedDate = null;
      state.filteredSearchResults = [...state.searchResults];
    },
    setResultsPage: (state, action) => {
      // const filteredSearchResults = state.resultsPageData.filteredSearchResults;
      // const pageSize = state.resultPageSize; // e.g. show 5 items
      // const totalResultSize = filteredSearchResults.length; // 20 searchResults
      // const numberOfPages = totalResultSize / state.resultPageSize; // e.g.   5 / 20 = 4 pages
      // const currentPage = 1;
      // const resultIndex = currentPage * pageSize; // e.g. page 4 X 5 searchResults   = last 20 searchResults
      // // for (let i = 0; i < resultsPageData.filteredSearchResults .length; i++) {}
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMockSearchResults.pending, (state, action) => {
        state.isSearchDataLoading = true;
      })
      .addCase(getMockSearchResults.fulfilled, (state, action) => {
        state.isSearchDataLoading = false;
        state.searchResults = [...action.payload];
        state.filteredSearchResults = [...state.searchResults];
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

export const searchResults = state => state.searchEngineData?.filteredSearchResults;

export const {
  setSearchTerm,
  setCategoryFilter,
  setDecisionFilter,
  setCompanyFilter,
  setSelectedDateFilter,
  incrementPagination,
  decrementPagination,
  filterResults,
  clearAllFilters,
} = searchEngineSlice.actions;

export default searchEngineSlice.reducer;
