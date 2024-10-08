import { React, memo } from "react";
import PropTypes from "prop-types";
import SVGWrapper from "../../common/SVGWrapper";

const ContactsIcon = memo(({ width, height, colour = "black" }) => {
  return (
    <SVGWrapper width={width} height={height}>
      <path
        d="M17.1062 1.33325H19.1062C19.4598 1.33325 19.799 1.47373 20.049 1.72378C20.2991 1.97383 20.4395 2.31296 20.4395 2.66659V5.99992M17.1062 1.33325H5.1062C4.04534 1.33325 3.02792 1.75468 2.27777 2.50482C1.52763 3.25497 1.1062 4.27239 1.1062 5.33325V16.6666C1.1062 17.7275 1.52763 18.7449 2.27777 19.495C3.02792 20.2452 4.04534 20.6666 5.1062 20.6666H17.1062M17.1062 1.33325V5.99992M17.1062 20.6666H19.1062C19.4598 20.6666 19.799 20.5261 20.049 20.2761C20.2991 20.026 20.4395 19.6869 20.4395 19.3333V15.9999M17.1062 20.6666V15.9999M17.1062 5.99992H20.4395M17.1062 5.99992V10.9999M20.4395 5.99992V10.9999M17.1062 15.9999H20.4395M17.1062 15.9999V10.9999M20.4395 15.9999V10.9999M17.1062 10.9999H20.4395M6.43953 15.3333C6.43953 15.3333 7.33953 13.3333 9.43953 13.3333C11.5395 13.3333 12.4395 15.3333 12.4395 15.3333M11.1062 8.33325C11.1062 8.77528 10.9306 9.1992 10.618 9.51176C10.3055 9.82432 9.88156 9.99992 9.43953 9.99992C8.99751 9.99992 8.57358 9.82432 8.26102 9.51176C7.94846 9.1992 7.77287 8.77528 7.77287 8.33325C7.77287 7.89122 7.94846 7.4673 8.26102 7.15474C8.57358 6.84218 8.99751 6.66659 9.43953 6.66659C9.88156 6.66659 10.3055 6.84218 10.618 7.15474C10.9306 7.4673 11.1062 7.89122 11.1062 8.33325Z"
        stroke={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
});

// Prop validators
ContactsIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colour: PropTypes.string.isRequired,
};

export default ContactsIcon;
