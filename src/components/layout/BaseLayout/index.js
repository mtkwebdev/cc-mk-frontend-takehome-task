import React from "react";
import * as S from "./styles";
import Footer from "../Footer";
import SidePanel from "../SidePanel";
const BaseLayout = ({ children }) => {
  return (
    <>
      <S.BaseLayoutContainer id="base-layout">
        <div className="sidepanel">
          <SidePanel />
        </div>
        <div className="content-container">
          <S.ContentContainer>{children}</S.ContentContainer>
        </div>
        <div className="footer-container">
          <Footer>Footer</Footer>
        </div>
      </S.BaseLayoutContainer>
    </>
  );
};

export default BaseLayout;
