import styled from "styled-components";

export const BaseSVG = styled.svg`
  path {
    stroke: ${p => (p.variant ? p.variant.default : "black")};
  }
`;
