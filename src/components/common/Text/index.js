import PropTypes from "prop-types";
import * as S from "./styles";

const Text = ({ as, ...otherProps }) => {
  const Component = S[as];
  return <Component {...otherProps} />;
};

Text.propTypes = {
  as: PropTypes.string.isRequired,
  isSubdued: PropTypes.bool,
};

export default Text;
