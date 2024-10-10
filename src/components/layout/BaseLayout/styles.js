import styled from "styled-components";

export const BaseLayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    "sidepanel main"
    "footer footer";
  grid-template-columns: 6.375rem auto;
  grid-template-rows: auto;

  & .side-panel {
    grid-area: sidepanel;
  }
  & .content-container {
    grid-area: main;
  }
  & .footer-container {
    grid-area: footer;
  }
`;

export const ContentContainer = styled.main``;
