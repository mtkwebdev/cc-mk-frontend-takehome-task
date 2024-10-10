import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";

import * as S from "./styles.js";
import Button from "../Button";
import InputContainer from "../InputContainer";
import Text from "../Text/index.js";
import ChevronIcon from "../../icons/ChevronIcon";
import { COLOURS } from "../../../enums/colours.js";

const subduedText = {
  default: COLOURS.text.subdued,
  pressed: COLOURS.text.subdued,
  hover: COLOURS.text.subdued,
};

const defaultText = {
  default: COLOURS.text.default,
  pressed: COLOURS.text.default,
  hover: COLOURS.text.default,
};

const inputButtonVariant = {
  default: COLOURS.surface.default,
  hover: COLOURS.surface.default,
};

const Dropdown = ({ placeholder, options, value, updateState, valueSelector }) => {
  const [openDropdownList, setOpenDropdownList] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (e, specificValue) => {
    setOpenDropdownList(!openDropdownList);
    if (specificValue) {
      return dispatch(updateState(specificValue));
    }
    dispatch(updateState(e.target.innerText));
  };

  return (
    <div>
      <InputContainer>
        <Button
          type="button"
          onClick={() => setOpenDropdownList(!openDropdownList)}
          variant={inputButtonVariant}
          textColour={subduedText}
          size="lg"
          isFullWidth={true}
          isInput={true}>
          {value ? value["text"] : placeholder}
        </Button>
        <S.ChevronIconContainer>
          <ChevronIcon variant={subduedText} size="sm" />
        </S.ChevronIconContainer>
      </InputContainer>

      <S.DropdownOptionsContainer>
        {openDropdownList && options?.length ? (
          <S.DropdownOptions>
            {options.map(({ text, ...option }) => (
              <Button
                type="button"
                key={text.replace(" ", "")}
                variant={inputButtonVariant}
                textColour={defaultText}
                isFullWidth={true}
                isOption={true}
                onClick={e => handleClick(e, option[valueSelector])}
                isListItem={true}>
                <Text as="TextBody">{text}</Text>
              </Button>
            ))}
          </S.DropdownOptions>
        ) : null}
      </S.DropdownOptionsContainer>
    </div>
  );
};

Dropdown.propType = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]).isRequired,
    })
  ),
};

export default Dropdown;
