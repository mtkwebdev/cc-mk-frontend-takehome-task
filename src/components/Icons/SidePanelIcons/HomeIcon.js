import { React, memo } from "react";
import PropTypes from "prop-types";
import BaseSVG from "../../common/BaseSVG";

const HomeIcon = memo(({ ...props }) => {
  return (
    <BaseSVG {...props}>
      <path
        d="M9.00041 25.667H23.0004C24.4732 25.667 25.667 24.4732 25.667 23.0004V13.0004L16.0004 6.33374L6.33374 13.0004V23.0004C6.33374 24.4732 7.52766 25.667 9.00041 25.667Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9995 20.9992C12.9995 19.5264 14.1935 18.3325 15.6661 18.3325H16.3328C17.8056 18.3325 18.9995 19.5264 18.9995 20.9992V25.6659H12.9995V20.9992Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSVG>
  );
});

// Prop validators
HomeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.string.isRequired,
};

export default HomeIcon;
