import { React, memo } from "react";
import PropTypes from "prop-types";
import BaseSVG from "../common/BaseSVG";

const HelpIcon = memo(({ ...props }) => {
  return (
    <BaseSVG {...props}>
      <path
        d="M25.6666 15.9999C25.6666 21.3387 21.3387 25.6666 15.9999 25.6666C10.6612 25.6666 6.33325 21.3387 6.33325 15.9999C6.33325 10.6612 10.6612 6.33325 15.9999 6.33325C21.3387 6.33325 25.6666 10.6612 25.6666 15.9999Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13.3333C13 13.3333 13.3333 10.3333 16 10.3333C18.6667 10.3333 19 11.9999 19 13.3333C19 14.335 18.4355 15.3369 17.3064 15.7731C16.6196 16.0385 16 16.5969 16 17.3333V17.6666"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6666 21.3334C16.6666 21.7015 16.3681 22.0001 15.9999 22.0001C15.6318 22.0001 15.3333 21.7015 15.3333 21.3334C15.3333 20.9653 15.6318 20.6667 15.9999 20.6667C16.3681 20.6667 16.6666 20.9653 16.6666 21.3334Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSVG>
  );
});

// Prop validators
HelpIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.object.isRequired,
};

export default HelpIcon;
