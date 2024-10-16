import * as S from "./styles";
import InputContainer from "../InputContainer";
import SearchIcon from "../../icons/SearchIcon";

import { COLOURS } from "../../../enums/colours";
import PropTypes from "prop-types";

const subduedIcon = {
  default: COLOURS.text.subdued,
  hover: COLOURS.text.subdued,
};

const InputField = ({ placeholder, type, label, isSearchInput = false, onChange }) => {
  const idFromLabel = label?.replace(" ", "-");
  return (
    <InputContainer label="label" idFromLabel={idFromLabel}>
      {isSearchInput && <SearchIcon size="sm" variant={subduedIcon} />}
      <S.InputField
        id={idFromLabel}
        type={type}
        placeholder={placeholder}
        isSearchInput={isSearchInput}
        onChange={e => onChange(e.target.value)}
      />
    </InputContainer>
  );
};

InputField.protoType = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
