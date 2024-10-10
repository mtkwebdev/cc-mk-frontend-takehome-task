import styled from "styled-components";
import { COLOURS } from "../../../enums/colours.js";
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${COLOURS.surface.footer.default};
  height: 27.563rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: auto;
  width: 80%;
  margin: auto auto auto;
  height: auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${COLOURS.borders.subdued};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const FooterEnd = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0rem auto;
  height: min-content;
  margin-bottom: 1rem;
`;
