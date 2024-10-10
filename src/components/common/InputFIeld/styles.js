import styled from "styled-components";
import { medium, textButton } from "../../../enums/textStyles.js";
export const InputField = styled.input`
  border: none;
  flex: 1 0 max-content;
  width: max-content;
  padding: ${p => (p.isSearchInput ? "0.9rem 0rem" : "0.9rem")};
  outline: none;
  font-weight: ${medium};
  font-size: ${textButton};
`;
