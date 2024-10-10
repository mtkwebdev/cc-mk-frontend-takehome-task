import { useState } from "react";
import { useDispatch } from "react-redux";
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

const Dropdown = ({ placeholder, options, fn, ...otherProps }) => {
  const dispatch = useDispatch();
  const [openDropdownList, setOpenDropdownList] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ text: placeholder, value: null });

  const handleSelect = e => {
    const selectedText = e.target.innerText;
    const selectedValue = options?.find(o => o.text === selectedText).value;
    setSelectedValue({ text: selectedText, value: selectedValue });
    setOpenDropdownList(!openDropdownList);
    dispatch(fn(selectedText));
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
          {selectedValue.text}
        </Button>
        <S.ChevronIconContainer>
          <ChevronIcon variant={subduedText} size="sm" />
        </S.ChevronIconContainer>
      </InputContainer>

      <S.DropdownOptionsContainer>
        {openDropdownList && options?.length ? (
          <S.DropdownOptions>
            {options.map(({ text }) => (
              <Button
                type="button"
                key={text.replace(" ", "")}
                onClick={handleSelect}
                variant={inputButtonVariant}
                textColour={defaultText}
                isFullWidth={true}
                isOption={true}>
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
    })
  ),
};

export default Dropdown;
