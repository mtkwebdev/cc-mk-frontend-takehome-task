import styled from "styled-components";
import { COLOURS } from "../../../enums/colours";
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  & button {
    padding: 1rem;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: none;
    color: ${COLOURS.actions.primary.default};
    font-weight: 300;
    background-color: ${COLOURS.actions.secondary.default};
    border: 1px solid transparent;
    &:hover {
      color: ${COLOURS.actions.primary.hover};
      background-color: ${COLOURS.actions.secondary.hover};
    }

    &.paginator-btn {
      padding: 0rem 0.25rem;
      border-radius: 0.5rem 0rem 0rem 0.5rem;
      border: 1px solid ${COLOURS.borders.default};

      & svg {
        transform: rotate(-90deg);
        padding: 0rem;
      }
      & path {
        stroke: ${COLOURS.text.subdued};
        &:hover {
          stroke: ${COLOURS.text.success};
        }
      }
      &:last-child {
        border-radius: 0rem 0.5rem 0.5rem 0rem;
        & svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
export const PreviousButton = styled.button``;
export const NextButton = styled.button``;
export const PageButton = styled.button``;
