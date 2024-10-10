import styled from "styled-components";
import { COLOURS } from "../../../../enums/colours";
import { textLg, light } from "../../../../enums/textStyles";

export const ResultsContainer = styled.div`
  margin-top: 5rem;
  overflow-x: hidden;
`;

export const ResultsItem = styled.div`
  &:first-child {
    margin-top: 0rem;
  }
  margin: 5rem 0rem;
`;

export const ResultItemTitle = styled.div`
  font-size: ${textLg};
  font-weight: ${light};
  margin: 1.5rem 0rem;
  color: ${COLOURS.actions.primary.default};
  cursor: pointer;
  &:hover {
    color: ${COLOURS.actions.primary.hover};
  }
`;

export const ResultItemDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin: 2rem 0rem;
`;

export const ResultItemDetails = styled.div``;
