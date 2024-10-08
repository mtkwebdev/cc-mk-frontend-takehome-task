import { React, memo } from "react";
import PropTypes from "prop-types";
import BaseSVG from "../../common/BaseSVG";

const ChevronIcon = memo(({ ...props }) => {
  return (
    <BaseSVG {...props}>
      <path
        d="M11.6667 17.6667L16 13.0001L20.3334 17.6667"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSVG>
  );
});

// Prop validators
ChevronIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.string.isRequired,
};

export default ChevronIcon;
