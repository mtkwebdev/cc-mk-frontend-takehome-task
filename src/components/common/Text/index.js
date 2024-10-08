import PropTypes from "prop-types";
import * as S from "./styles";

const Text = ({ as, ...otherProps }) => {
  const Component = S[as];
  console.log(Component);
  return <Component {...otherProps} />;
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  isSubdued: PropTypes.bool,
};

export default Text;
