import { memo } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const IconButton = memo(({ children, ...props }) => {
  return <S.IconButton {...props}>{children}</S.IconButton>;
});

IconButton.propTypes = {
  variant: PropTypes.object.isRequired,
};

export default IconButton;
