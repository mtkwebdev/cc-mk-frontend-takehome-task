import { React, memo } from "react";
import PropTypes from "prop-types";
import SVGWrapper from "../../common/SVGWrapper";

const SearchIcon = memo(({ width, height, colour = "black" }) => {
  return (
    <SVGWrapper width={width} height={height}>
      <path
        d="M25.6666 25.6666L20.6666 20.6666L25.6666 25.6666ZM6.33325 14.6666C6.33325 10.0642 10.0642 6.33325 14.6666 6.33325C19.269 6.33325 22.9999 10.0642 22.9999 14.6666C22.9999 19.269 19.269 22.9999 14.6666 22.9999C10.0642 22.9999 6.33325 19.269 6.33325 14.6666Z"
        stroke={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
});

// Prop validators
SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colour: PropTypes.string.isRequired,
};

export default SearchIcon;
