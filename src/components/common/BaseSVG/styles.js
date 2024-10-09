import styled from "styled-components";

export const BaseSVG = styled.svg`
  path {
    stroke: ${p => p.variant.default};
  }

  &:focus path {
    stroke: ${p => p.variant.pressed};
  }

  &:hover path {
    stroke: ${p => p.variant.hover};
  }

  &:disabled path {
    stroke: ${p => p.variant.disabled};
  }
`;
