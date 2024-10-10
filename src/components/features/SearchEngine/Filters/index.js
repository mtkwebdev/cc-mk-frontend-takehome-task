import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import InputField from "../../../common/InputFIeld";
import Dropdown from "../../../common/Dropdown";
import Button from "../../../common/Button";
import { COLOURS } from "../../../../enums/colours";

import {
  getMockCategoriesList,
  getMockDecisionsList,
  getMockCompaniesList,
  getMockDatesList,
} from "../../../../services/thunks/getDataLists.js";

import {
  filterResults,
  setSearchTerm,
  setCategoryFilter,
  setDecisionFilter,
  setCompanyFilter,
  setSelectedDateFilter,
} from "../searchEngineSlice.js";

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
  const dispatch = useDispatch();
  const categoryOptions = useSelector(state => state.searchEngineData?.categoriesList);
  const decisionOptions = useSelector(state => state.searchEngineData?.decisionsList);
  const companyOptions = useSelector(state => state.searchEngineData?.companiesList);
  const dateOptions = useSelector(state => state.searchEngineData?.datesList);

  const categoryValue = useSelector(state => state.searchEngineData?.categoryValue);
  const decisionValue = useSelector(state => state.searchEngineData?.decisionValue);
  const companyValue = useSelector(state => state.searchEngineData?.companyValue);
  const dateValue = useSelector(state => state.searchEngineData?.dateValue);

  const selectedCategory = useRef(null);
  const selectedDecision = useRef(null);
  const selectedCompany = useRef(null);
  const selectedDates = useRef(null);

  const handleDropdownSelections = () => {
    console.log(selectedCategory);
    dispatch(setCategoryFilter(selectedCategory.current.value));
    dispatch(setDecisionFilter(selectedDecision.current.value));
    dispatch(setCompanyFilter(selectedCompany.current.value));
    dispatch(setSelectedDateFilter(selectedDates.current.value));
  };

  useEffect(() => {
    dispatch(getMockCategoriesList());
    dispatch(getMockDecisionsList());
    dispatch(getMockCompaniesList());
    dispatch(getMockDatesList());
  }, [dispatch]);

  return (
    <S.SearchEngineFilters>
      <S.SearchBarFilter>
        <InputField
          className="search-area"
          placeholder="Search"
          type="search"
          label="search"
          isSearchInput={true}
          onChange={value => dispatch(setSearchTerm(value))}
        />
        <Button
          type="button"
          className="search-button-area"
          variant={primaryButton}
          textColour={secondaryText}
          size="lg"
          isSearchBtn={true}
          onClick={() => dispatch(filterResults())}>
          Search
        </Button>
      </S.SearchBarFilter>
      <S.DropDownFilters>
        <Dropdown
          className="category-area"
          placeholder="Category"
          options={categoryOptions}
          ref={selectedCategory}
          value={categoryValue}
          onClick={handleDropdownSelections}
        />
        <Dropdown
          className="decision-area"
          placeholder="Decision"
          options={decisionOptions}
          ref={selectedDecision}
          value={decisionValue}
          onClick={handleDropdownSelections}
        />
        <Dropdown
          className="company-area"
          placeholder="Company"
          options={companyOptions}
          ref={selectedCompany}
          value={companyValue}
          onClick={handleDropdownSelections}
        />
        <Dropdown
          className="date-area"
          placeholder="Date"
          options={dateOptions}
          ref={selectedDates}
          value={dateValue}
          onClick={handleDropdownSelections}
        />
      </S.DropDownFilters>
    </S.SearchEngineFilters>
  );
};

export default SearchEngineFilters;
