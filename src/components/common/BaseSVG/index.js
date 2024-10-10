import { React, memo } from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const iconSize = {
  xxl: "5rem",
  xl: "4rem",
  lg: "2.5rem",
  md: "2rem",
  sm: "1.5rem",
  xs: "1.25rem",
};

const BaseSVG = memo(({ size, variant, children }) => {
  return (
    <S.BaseSVG
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox={`0 0 32 32`}
      fill="none"
      focusable="true"
      xmlns="http://www.w3.org/2000/svg"
      variant={variant}>
      {children}
    </S.BaseSVG>
  );
});

// Prop validators
BaseSVG.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

export default BaseSVG;
