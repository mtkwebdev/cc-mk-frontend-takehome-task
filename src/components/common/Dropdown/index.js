import { useState, forwardRef, useRef } from "react";
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

const Dropdown = forwardRef(({ placeholder, options, value }, ref) => {
  const [openDropdownList, setOpenDropdownList] = useState(false);
  const [selectedValue, setSelectedValue] = useState(placeholder);

  const handleClick = e => {
    setSelectedValue(e.target.innerText);
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
          {selectedValue}
        </Button>
        <S.ChevronIconContainer>
          <ChevronIcon variant={subduedText} size="sm" />
        </S.ChevronIconContainer>
      </InputContainer>

      <S.DropdownOptionsContainer>
        {openDropdownList && options?.length ? (
          <S.DropdownOptions>
            <S.SelectedDropdown ref={ref} value={selectedValue} />
            {options.map(({ text }) => (
              <Button
                type="button"
                key={text.replace(" ", "")}
                variant={inputButtonVariant}
                textColour={defaultText}
                isFullWidth={true}
                isOption={true}
                onClick={handleClick}>
                <Text as="TextBody">{text}</Text>
              </Button>
            ))}
          </S.DropdownOptions>
        ) : null}
      </S.DropdownOptionsContainer>
    </div>
  );
});

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
