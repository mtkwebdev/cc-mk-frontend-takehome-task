import styled from "styled-components";

import { COLOURS } from "../../../enums/colours.js";

export const IconButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: min-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-colour: ${p => COLOURS.actions[p.variant]?.default};

  &:hover {
    background-colour: ${p => COLOURS.actions[p.variant]?.hover};
  }

  &.pressed {
    background-colour: ${p => COLOURS.actions[p.variant]?.pressed};
  }

  &.disabled {
    background-colour: ${p => COLOURS.actions[p.variant]?.disabled};
  }
`;
