import { React, memo } from "react";
import PropTypes from "prop-types";

const SVGWrapper = memo(({ width = 32, height = 32, children }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
});

// Prop validators
SVGWrapper.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
};

export default SVGWrapper;
