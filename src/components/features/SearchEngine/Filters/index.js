import * as S from "./styles";
import InputField from "../../../common/InputFIeld";
import Dropdown from "../../../common/InputDropdown";
import Button from "../../../common/Button";
import { COLOURS } from "../../../../enums/colours";

const primaryButton = {
  default: COLOURS.actions.primary.default,
  hover: COLOURS.actions.primary.hover,
  pressed: COLOURS.actions.primary.default,
};

const secondaryText = {
  default: COLOURS.actions.secondary.default,
  hover: COLOURS.actions.secondary.hover,
  pressed: COLOURS.actions.secondary.default,
};

const SearchEngineFilters = () => {
  const mockOptions = [
    { text: "One", value: 1 },
    { text: "Two", value: 2 },
    { text: "Three", value: 3 },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
  ];

  return (
    <S.SearchEngineFilters>
      <S.SearchBarFilter>
        <InputField className="search-area" placeholder="Search" type="search" label="search" isSearchInput={true} />
        <Button
          type="button"
          className="search-button-area"
          variant={primaryButton}
          textColour={secondaryText}
          size="lg"
          isSearchBtn={true}>
          Search
        </Button>
      </S.SearchBarFilter>
      <S.DropDownFilters>
        <Dropdown className="category-area" placeholder="Category" options={mockOptions} />
        <Dropdown className="decision-area" placeholder="Decision" options={mockOptions} />
        <Dropdown className="company-area" placeholder="Company" options={mockOptions} />
        <Dropdown className="date-area" placeholder="Date" options={mockOptions} />
      </S.DropDownFilters>
    </S.SearchEngineFilters>
  );
};

export default SearchEngineFilters;
