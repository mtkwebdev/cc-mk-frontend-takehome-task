import styled from "styled-components";
import { COLOURS } from "../../../enums/colours.js";

const sidePanelBorderDefaultColour = COLOURS.surface.selected.default;

export const SidePanel = styled.div`
  height: 100%;
  border-right: 1px solid ${sidePanelBorderDefaultColour};
  padding: 2rem 1.688rem;
  width: min-content;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-right: 1px solid ${sidePanelBorderDefaultColour};
    box-shadow: ${sidePanelBorderDefaultColour} 0px 1px 5px 1px;
    transition: all 0.2s ease-in-out;
  }
`;
export const SidePanelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 36rem;
  width: min-content;
`;

export const SidePanelLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-self: center;
`;

export const CourtCorrectLogoImg = styled.img`
  align-self: center;
  width: 2rem;
  height: 2rem;
`;
