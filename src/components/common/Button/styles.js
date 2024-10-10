import styled from "styled-components";
import { medium, textButton, lineButton } from "../../../enums/textStyles.js";

const getButtonPadding = p => {
  if (p.isLink) return "0rem";
  switch (p.size) {
    case "lg":
      return "1rem 1.5rem";
    case "md":
      return "0.75rem 1.5rem";
    default:
      return "0.5rem 1rem";
  }
};

const setButtonDynamicWidth = p => {
  if (p.isSearchBtn) return "width: 12rem";
  return p.isFullWidth ? "flex: 1 0 max-content" : "flex:  0 0 min-content";
};

export const Button = styled.button`
  ${p => setButtonDynamicWidth(p)};
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: ${p => getButtonPadding(p)};
  border-radius: ${p => (!p.isOption ? "0.25rem" : "0rem")};
  color: ${p => p.textColour.default || "inherit"};
  background-color: ${p => p.variant.default || "inherit"};
  font-size: ${textButton};
  font-weight: ${medium};
  line-hight: ${lineButton};
  text-align: ${p => (p.isInput || p.isOption ? "start" : "center")};

  &:focus {
    color: ${p => p.textColour.pressed || "inherit"};
    background-color: ${p => p.variant.pressed || "inherit"};
  }

  &:hover {
    color: ${p => p.textColour.hover || "inherit"};
    background-color: ${p => p.variant.hover || "inherit"};
  }

  &:disabled {
    color: ${p => p.textColour.disabled || "inherit"};
    background-color: ${p => p.variant.disabled || "inherit"};
  }
`;
