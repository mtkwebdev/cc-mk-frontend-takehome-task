import styled from "styled-components";
import { COLOURS } from "../../../enums/colours.js";

const sidePanelBorderColour = COLOURS.borders.success.subdued;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: between;
  height: 36rem;
  width: 6.375rem;
  border-right: 1px solid ${sidePanelBorderColour};
`;
export const SidePanelLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 3rem;
`;
