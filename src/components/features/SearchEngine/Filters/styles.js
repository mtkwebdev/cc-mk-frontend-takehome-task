import styled from "styled-components";

export const SearchEngineFilters = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-areas:
    "search search search searchBtn"
    "categories decisions company date";
  ${
    "" /* grid-template-areas:
    "header header header header"
    "subheader subheader subheader subheader"
    "search search search searchBtn"
    "categories decisions company date"
    ". . clear ."
    "results listSize sortBy sortBy"; */
  }
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 1.25rem;

  & .header-area {
    grid-area: header;
    place-self: center;
  }
  & .subheader-area {
    grid-area: subheader;
    place-self: center;
  }
  & .search-area {
    grid-area: search;
  }

  & .search-button-area {
    grid-area: searchBtn;
  }
  & .categories-area {
    grid-area: categories;
  }
  & .decisions-area {
    grid-area: decisions;
  }
  & .company-area {
    grid-area: company;
  }
  & .date-area {
    grid-area: date;
  }
  & .clear-area {
    grid-area: clear;
  }
  & .date-area {
    grid-area: date;
  }
  & .results-area {
    grid-area: results;
  }
  & .list-size-area {
    grid-area: listSize;
  }
  & .sort-by-area {
    grid-area: sortBy;
  }
`;
