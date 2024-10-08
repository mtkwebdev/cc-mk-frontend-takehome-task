import * as S from "./styles.js";
import IconButton from "../../common/IconButton";
import * as Icons from "../../Icons/SidePanelIcons";

const SidePanel = () => {
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
              <IconButton variant="primary" key={name}>
                <IconComponent variantType="sidePanel" variant="success" />
              </IconButton>
            );
          })}
        </S.SidePanelLinks>
      </S.SidePanelContent>
    </S.SidePanel>
  );
};

export default SidePanel;
