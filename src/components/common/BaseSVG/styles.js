import styled from "styled-components";

export const BaseSVG = styled.svg`
  path {
    stroke: ${p => p.variant.default || "inherit"};
  }

  &:focus path {
    stroke: ${p => p.variant.pressed || "inherit"};
  }

  &:hover path {
    stroke: ${p => p.variant.hover || "inherit"};
  }

  &:disabled path {
    stroke: ${p => p.variant.disabled || "inherit"};
  }
`;
