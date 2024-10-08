import React from "react";
import * as S from "./styles";
import Footer from "../Footer";
import SidePanel from "../SidePanel";
const BaseLayout = ({ children }) => {
  return (
    <>
      <S.BaseLayoutContainer id="base-layout">
        <SidePanel />
        {children}
      </S.BaseLayoutContainer>
      <Footer>Footer</Footer>
    </>
  );
};

export default BaseLayout;
