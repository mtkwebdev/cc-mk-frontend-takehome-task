import { createSlice } from "@reduxjs/toolkit";

import {
  getMockSearchResults,
  getMockCategoriesList,
  getMockDecisionsList,
  getMockCompaniesList,
  getMockDatesList,
} from "../../../services/thunks/getDataLists.js";

import { filterResultsHelper, setCurrentSearchPageHelper } from "../../../helpers/searchEngineHelpers.js";

const initialState = {
  isSearchDataLoading: false,
  searchTerm: null,
  selectedCategory: { text: "", value: null },
  selectedDecision: { text: "", value: null },
  selectedCompany: { text: "", value: null },
  selectedDate: { text: "", value: null },
  pagination: {
    page: 1,
    pageSize: { text: "5", value: 5 },
    totalPages: null,
    totalPageItems: null,
    firstResultArrIndex: 0,
    firstResultIndex: 0, // first - last of all
    lastResultIndex: 0, // // first - last of all
    lastResultItemIndex: 0,
    sizeOptions: [
      { text: "5", value: 5 },
      { text: "10", value: 10 },
      { text: "20", value: 20 },
    ],
    sortBy: { text: "Sort By", value: 5 },
  },
  searchResultsCount: 0,
  searchResults: [],
  filteredSearchResults: [],
  categoriesList: [],
  decisionsList: [],
  companiesList: [],
  datesList: [],
  sortByList: [
    { text: "Newest", value: 1 },
    { text: "Oldest", value: 2 },
  ],
  test: null,
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
      filterResultsHelper(state);
    },
    clearAllFilters: (state, action) => {
      state.searchTerm = "";
      state.selectedCategory = { text: "", value: null };
      state.selectedDecision = { text: "", value: null };
      state.selectedCompany = { text: "", value: null };
      state.selectedDate = { text: "", value: null };
      state.pagination.sortBy = { text: "Sort By", value: 0 };
      state.filteredSearchResults = [...state.searchResults];
    },
    setCurrentSearchResultPage: (state, action) => {
      setCurrentSearchPageHelper(state);
      setCurrentSearchPageHelper(state);
    },
    setCurrentPage: (state, action) => {
      console.log(action.payload);
      state.pagination.page = action.payload;
    },
    setSearchResultPageSize: (state, actions) => {
      state.pagination.pageSize = actions.payload;
      setCurrentSearchPageHelper(state);
    },
    incrementPagination: (state, action) => {
      const page = state.pagination.page;
      const lastPage = state.pagination.totalPages;
      if (page < lastPage) state.pagination.page += 1;
    },
    decrementPagination: (state, action) => {
      const page = state.pagination.page;
      state.pagination.page = page > 1 ? page - 1 : 1;
    },
    setSearchResultSortOrder: (state, action) => {
      state.pagination.sortBy = action.payload;
      const resultsCopy = state.filteredSearchResults;
      state.filteredSearchResults = resultsCopy.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        // Check sorting order: "Newest" or "Oldest"
        if (state.pagination.sortBy.value === 1) {
          return dateB - dateA; // Newest first
        } else if (state.pagination.sortBy.value === 2) {
          return dateA - dateB; // Oldest first
        }
        return 0; // No sorting if not specified
      });
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
        state.searchResultsCount = state.searchResults.length;
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
  setCurrentSearchResultPage,
  setSearchResultPageSize,
  setSearchResultSortOrder,
  setCurrentPage,
} = searchEngineSlice.actions;

export default searchEngineSlice.reducer;
