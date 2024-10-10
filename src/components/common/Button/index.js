import * as S from "./styles";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  textColour: PropTypes.object.isRequired,
  variant: PropTypes.object.isRequired,
};

export default Button;
