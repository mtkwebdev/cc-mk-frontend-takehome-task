import { React, memo } from "react";
import PropTypes from "prop-types";
import SVGWrapper from "../../common/SVGWrapper";

const SuitcaseIcon = memo(({ width, height, colour = "black" }) => {
  return (
    <SVGWrapper width={width} height={height}>
      <path
        d="M6.33325 12.9999C6.33325 11.5272 7.52716 10.3333 8.99992 10.3333H22.9999C24.4727 10.3333 25.6666 11.5272 25.6666 12.9999V22.9999C25.6666 24.4727 24.4727 25.6666 22.9999 25.6666H8.99992C7.52716 25.6666 6.33325 24.4727 6.33325 22.9999V12.9999Z"
        stroke={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 9.99992V8.99992C11.6667 7.52716 12.8607 6.33325 14.3334 6.33325H17.6667C19.1395 6.33325 20.3334 7.52716 20.3334 8.99992V9.99992"
        stroke={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.66675 17.6667H25.3334" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6667 15.6667V19.0001" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.3333 15.6667V19.0001" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SVGWrapper>
  );
});

// Prop validators
SuitcaseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colour: PropTypes.string.isRequired,
};

export default SuitcaseIcon;
