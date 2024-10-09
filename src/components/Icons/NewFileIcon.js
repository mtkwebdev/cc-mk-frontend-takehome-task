import { React, memo } from "react";
import PropTypes from "prop-types";
import BaseSVG from "../common/BaseSVG";

const NewFileIcon = memo(({ ...props }) => {
  return (
    <BaseSVG {...props}>
      <path
        d="M11.1076 25.6666H22.4409C23.9137 25.6666 25.1076 24.4727 25.1076 22.9999V11.9999L19.4409 6.33325H11.1076C9.63482 6.33325 8.44092 7.52716 8.44092 8.99992V22.9999C8.44092 24.4727 9.63482 25.6666 11.1076 25.6666Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24.7731 12.3334H19.1064V6.66675" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.7729 20.3333H19.7729" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.7729 16.3333H19.7729" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseSVG>
  );
});

// Prop validators
NewFileIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.object.isRequired,
};

export default NewFileIcon;
