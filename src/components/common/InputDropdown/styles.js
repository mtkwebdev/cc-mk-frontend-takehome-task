import styled from "styled-components";
import { COLOURS } from "../../../enums/colours";
export const Dropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  flex: 1 0 max-content;
  width: max-content;
  padding: 0.9rem;
  outline: none;
  font-size: 0.9rem;
  color: ${COLOURS.text.subdued};
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
`;

export const ChevronIconContainer = styled.span`
  svg {
    transform: rotate(180deg);
  }
`;

export const DropdownOptions = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.5rem;
  & button:hover,
  button:focus,
  button:active {
    background-color: ${COLOURS.surface.selected.default};
    & p {
      color: ${COLOURS.text.success};
    }
  }
`;
