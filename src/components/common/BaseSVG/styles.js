import styled from "styled-components";

export const BaseSVG = styled.svg`
  &:focus {
    stroke: ${p => p.variant.pressed};
  }
  path {
    stroke: ${p => p.variant.default};

    &:hover {
      stroke: ${p => p.variant.hover};
    }

    &:disabled {
      stroke: ${p => p.variant.disabled};
    }
  }
`;
