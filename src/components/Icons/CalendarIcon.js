import { React, memo } from "react";
import PropTypes from "prop-types";
import BaseSVG from "../common/BaseSVG";

const CalendarIcon = memo(({ ...props }) => {
  return (
    <BaseSVG {...props}>
      <path
        d="M6.33325 11.6667C6.33325 10.1939 7.52716 9 8.99992 9H22.9999C24.4727 9 25.6666 10.1939 25.6666 11.6667V23C25.6666 24.4728 24.4727 25.6667 22.9999 25.6667H8.99992C7.52716 25.6667 6.33325 24.4728 6.33325 23V11.6667Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.6667 6.33325V10.9999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.3333 6.33325V10.9999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.3333 14.3333H21.6666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseSVG>
  );
});

// Prop validators
CalendarIcon.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.object.isRequired,
};

export default CalendarIcon;
