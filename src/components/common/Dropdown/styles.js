import styled from "styled-components";
import { COLOURS } from "../../../enums/colours";

export const Dropdown = styled.div`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  & > .input-container > .input-button {
    padding: ${p => (p.isDateInput ? "0.9rem 0rem" : "0.9rem")};
  }
`;

export const ChevronIconContainer = styled.span`
  svg {
    transform: rotate(180deg);
  }
`;

export const DropdownOptionsContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 50;
`;

export const DropdownOptions = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  max-height: 16rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  z-index: 50;

  & button:hover,
  button:focus,
  button:active {
    background-color: ${COLOURS.surface.selected.default};
    & p {
      color: ${COLOURS.text.success};
    }
  }
`;
