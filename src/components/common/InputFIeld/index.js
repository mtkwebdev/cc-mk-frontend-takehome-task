import * as S from "./styles";
import { COLOURS } from "../../../enums/colours";
import InputContainer from "../InputContainer";
import SearchIcon from "../../icons/SearchIcon";

const SearchIconContainer = ({ type, variant }) => {
  if (type.toLowerCase() === "search") return <SearchIcon variant={variant} size="sm" />;
};

const InputField = ({ label, placeholder, type, children, ...props }) => {
  const searchIconColour = {
    default: COLOURS.text.subdued,
    hover: COLOURS.text.subdued,
    pressed: COLOURS.text.subdued,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <InputContainer>
        <SearchIconContainer type={type} variant={searchIconColour} />
        <S.InputFIeld {...props} placeholder={placeholder} />
        {children}
      </InputContainer>
    </div>
  );
};

export default InputField;
