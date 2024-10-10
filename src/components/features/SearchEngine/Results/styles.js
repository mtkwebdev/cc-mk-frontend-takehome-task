import styled from "styled-components";
import { COLOURS } from "../../../../enums/colours";
import { textXl } from "../../../../enums/textStyles";

export const ResultsContainer = styled.div`
  margin-top: 5rem;
  overflow-x: hidden;
`;

export const ResultsItem = styled.div`
  margin: 5rem 0rem;
`;

export const ResultItemTitle = styled.div`
  font-size: ${textXl};
  margin: 2rem 0rem;
  color: ${COLOURS.actions.primary.default};
  cursor: pointer;
  &:hover {
    color: ${COLOURS.actions.primary.hover};
  }
`;

export const ResultItemDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;
`;

export const ResultItemDetails = styled.div``;
