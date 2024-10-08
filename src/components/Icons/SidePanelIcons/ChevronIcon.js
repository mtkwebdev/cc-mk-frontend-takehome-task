import { React, memo } from "react";
import PropTypes from "prop-types";
import SVGWrapper from "../../common/SVGWrapper";

const ChevronIcon = memo(({ width, height, colour }) => {
  return (
    <SVGWrapper width={width} height={height}>
      <path
        d="M11.6667 17.6667L16 13.0001L20.3334 17.6667"
        colour={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
});

// Prop validators
ChevronIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colour: PropTypes.string.isRequired,
};

export default ChevronIcon;
