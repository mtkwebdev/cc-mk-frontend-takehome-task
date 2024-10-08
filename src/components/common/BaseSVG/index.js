import { React, memo } from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const BaseSVG = memo(({ width = 32, height = 32, children, ...otherProps }) => {
  return (
    <S.BaseSVG
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}>
      {children}
    </S.BaseSVG>
  );
});

// Prop validators
BaseSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
  variantType: PropTypes.string,
  variant: PropTypes.string,
};

export default BaseSVG;
