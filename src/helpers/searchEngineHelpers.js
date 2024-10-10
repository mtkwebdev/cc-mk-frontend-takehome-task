export const filterResultsHelper = state => {
  const { searchTerm, selectedCategory, selectedDecision, selectedCompany, selectedDate } = state;
  state.filteredSearchResults = [...state.searchResults];
  state.filteredSearchResults = state.filteredSearchResults
    .filter(x => (searchTerm ? x.title.toLowerCase().includes(searchTerm.toLowerCase()) : true))
    .filter(x => (selectedCategory?.value ? x.category === selectedCategory?.value : true))
    .filter(x => (selectedDecision?.value ? x.decision === selectedDecision?.value : true))
    .filter(x => (selectedCompany?.value ? x.company === selectedCompany?.value : true))
    .filter(x => (selectedDate?.value ? x.date === selectedDate?.value : true));
};

export const setCurrentSearchPageHelper = state => {
  const { pageSize } = state.pagination;

  // reset filteredSearchResults
  filterResultsHelper(state);
  let arr = state.filteredSearchResults;

  // set items per page and total pages
  state.pagination.totalPageItems = state.filteredSearchResults.length; // 20 searchResults
  state.pagination.totalPages = Math.floor(state.searchResultsCount / pageSize.value); // e.g.   5 / 20 = 4 pages

  // find index of result for the current page
  state.pagination.firstResultItemIndex = state.pagination.page * pageSize.value - pageSize.value; // e.g. show items 15-20 on page 4/4

  // set the length of items shown per page
  state.pagination.totalPageItems = state.pagination.firstResultItemIndex + pageSize.value;

  // page result starts from i and ends with ii
  const i = state.pagination.firstResultItemIndex;
  const ii = state.pagination.totalPageItems;
  state.filteredSearchResults = arr.splice(i, ii);
};
