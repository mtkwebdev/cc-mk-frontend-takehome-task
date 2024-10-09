import styled from "styled-components";

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
  background-color: ${p => p.variant.default || "inherit"};

  &:focus {
    background-color: ${p => p.variant.pressed || "inherit"};
  }

  &:hover {
    background-color: ${p => p.variant.hover || "inherit"};
  }

  &:disabled {
    background-color: ${p => p.variant.disabled || "inherit"};
  }
`;
