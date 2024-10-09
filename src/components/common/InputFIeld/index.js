import * as S from "./styles";
import InputFIeldContainer from "../InputContainer";
import SearchIcon from "../../icons/SearchIcon";

import { COLOURS } from "../../../enums/colours";

const subduedIcon = {
  default: COLOURS.text.subdued,
  hover: COLOURS.text.subdued,
};

const InputField = ({ placeholder, type, ...props }) => {
  return (
    <InputFIeldContainer>
      <SearchIcon size="sm" variant={subduedIcon} />
      <S.InputFIeld {...props} placeholder={placeholder} />
    </InputFIeldContainer>
  );
};

export default InputField;
