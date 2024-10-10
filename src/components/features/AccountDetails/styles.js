import styled from "styled-components";
import { COLOURS } from "../../../enums/colours";

export const AccountDetailsContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 5rem;
`;
export const AccountDetails = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const AccountDetailsIcon = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: ${COLOURS.decorative.surface.one};
  color: ${COLOURS.text.success};
  & span {
    margin: auto;
  }
`;
