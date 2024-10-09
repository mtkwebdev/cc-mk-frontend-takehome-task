import styled from "styled-components";
import { COLOURS } from "../../../enums/colours";
export const InputContainer = styled.div`
  display: flex;
  flex: 1 0 max-content;
  border: 1px solid ${COLOURS.borders.default};
  border-radius: 0.25rem;
  align-items: center;
  padding: 0.1rem;

  svg {
    padding: 0.9rem 0.2rem 0.9rem 0.9rem;
  }
`;
