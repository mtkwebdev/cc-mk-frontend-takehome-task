import * as S from "./styles.js";
import IconButton from "../../common/IconButton";
import * as Icons from "../../Icons/SidePanelIcons";

const SidePanel = () => {
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
      <S.SidePanelLinks className="side-panel_links">
        {SidePanelIcons.map(({ name }) => {
          const IconComponent = Icons[name];
          return (
            <IconButton variant="primary" key={name}>
              <IconComponent variantType="sidePanel" variant="success" />
            </IconButton>
          );
        })}
      </S.SidePanelLinks>
    </S.SidePanel>
  );
};

export default SidePanel;
