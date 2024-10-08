import styled from "styled-components";
import { COLOURS } from "../../../enums/colours.js";

export const BaseSVG = styled.svg`
  path {
    stroke: ${p => COLOURS[p.variantType][p.variant]?.default};

    &.pressed {
      stroke: ${p => COLOURS[p.variantType][p.variant]?.pressed};
    }

    &.disabled {
      stroke: ${p => COLOURS[p.variantType][p.variant]?.disabled};
    }
  }
`;
