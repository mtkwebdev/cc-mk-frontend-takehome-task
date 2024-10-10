import styled from "styled-components";

export const SearchEngineFilters = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1 0 max-content;
`;

export const SearchBarFilter = styled.div`
  display: flex;
  flex: 1 0 max-content;
  gap: 1.25rem;
`;
export const DropDownFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
`;

export const ClearFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 10rem;
`;

export const SearchResultPageDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr 2fr;
  grid-template-rows: "1fr";
  gap: 1.25rem;

  & h1 {
    margin: 0;
    text-align: start;
  }
`;
