import styled from "styled-components";
import { COLOURS } from "../../../../enums/colours";
import { textXl } from "../../../../enums/textStyles";

export const ResultsList = styled.div``;

export const ResultItemTitle = styled.div`
  font-size: ${textXl};
  margin: 2rem 0rem;
  color: ${COLOURS.actions.primary.default};
  &:hover {
    color: ${COLOURS.actions.primary.hover};
  }
`;
