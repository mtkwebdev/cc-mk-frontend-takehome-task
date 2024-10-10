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
