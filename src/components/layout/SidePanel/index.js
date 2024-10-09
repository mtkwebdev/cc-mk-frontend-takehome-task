import * as S from "./styles.js";
import IconButton from "../../common/IconButton";
import * as Icons from "../../icons/SidePanelIcons";

import { COLOURS } from "../../../enums/colours.js";

const SidePanel = () => {
  const iconButtonColours = {
    default: COLOURS.actions.secondary.default,
    hover: COLOURS.actions.secondary.hover,
    pressed: COLOURS.actions.secondary.pressed,
    disabled: COLOURS.actions.secondary.disabled,
  };

  const sidePanelIconColours = {
    default: COLOURS.sidePanel.success?.default,
    hover: COLOURS.sidePanel.success?.hover,
    pressed: COLOURS.sidePanel.success?.pressed,
    disabled: COLOURS.sidePanel.success?.disabled,
  };

  const courtCorrectLogoIcon = process.env.PUBLIC_URL + "/icon.png";

  const SidePanelIcons = [
    { name: "CogIcon" },
    { name: "ContactsIcon" },
    { name: "HelpIcon" },
    { name: "HomeIcon" },
    { name: "NewFileIcon" },
    { name: "SearchIcon" },
    { name: "SuitcaseIcon" },
  ];

  return (
    <S.SidePanel className="side-panel">
      <S.SidePanelContent>
        <S.CourtCorrectLogoImg src={courtCorrectLogoIcon} alt="CourtCorrect logo icon" />
        <S.SidePanelLinks>
          {SidePanelIcons.map(({ name }) => {
            const IconComponent = Icons[name];
            return (
              <IconButton variant={iconButtonColours} key={name}>
                <IconComponent variant={sidePanelIconColours} />
              </IconButton>
            );
          })}
        </S.SidePanelLinks>
      </S.SidePanelContent>
    </S.SidePanel>
  );
};

export default SidePanel;
