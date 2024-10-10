import { useEffect } from "react";
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
  clearAllFilters,
} from "../searchEngineSlice.js";

const primaryButton = {
  default: COLOURS.actions.primary.default,
  hover: COLOURS.actions.primary.hover,
  pressed: COLOURS.actions.primary.default,
};
const secondaryButton = {
  default: COLOURS.actions.secondary.default,
  hover: COLOURS.actions.secondary.hover,
  pressed: COLOURS.actions.secondary.default,
};

const secondaryText = {
  default: COLOURS.actions.secondary.default,
  hover: COLOURS.actions.secondary.hover,
  pressed: COLOURS.actions.secondary.default,
};
const successText = {
  default: COLOURS.text.success,
  hover: COLOURS.text.success,
  pressed: COLOURS.text.success,
};

const SearchEngineFilters = () => {
  const dispatch = useDispatch();
  const categoryOptions = useSelector(state => state.searchEngineData?.categoriesList);
  const decisionOptions = useSelector(state => state.searchEngineData?.decisionsList);
  const companyOptions = useSelector(state => state.searchEngineData?.companiesList);
  const dateOptions = useSelector(state => state.searchEngineData?.datesList);

  const selectedCategory = useSelector(state => state.searchEngineData?.selectedCategory);
  const selectedDecision = useSelector(state => state.searchEngineData?.selectedDecision);
  const selectedCompany = useSelector(state => state.searchEngineData?.selectedCompany);
  const selectedDate = useSelector(state => state.searchEngineData?.selectedDate);

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
          updateState={state => setCategoryFilter(state)}
          value={selectedCategory}
        />
        <Dropdown
          className="decision-area"
          placeholder="Decision"
          options={decisionOptions}
          updateState={state => setDecisionFilter(state)}
          value={selectedDecision}
        />
        <Dropdown
          className="company-area"
          placeholder="Company"
          options={companyOptions}
          updateState={state => setCompanyFilter(state)}
          value={selectedCompany}
        />
        <Dropdown
          className="date-area"
          placeholder="Date"
          options={dateOptions}
          updateState={state => setSelectedDateFilter(state)}
          value={selectedDate}
        />
      </S.DropDownFilters>
      <S.ClearFiltersContainer>
        <Button
          type="button"
          variant={secondaryButton}
          textColour={successText}
          size="lg"
          isFullWidth={false}
          onClick={() => dispatch(clearAllFilters())}>
          Clear Filters
        </Button>
      </S.ClearFiltersContainer>
    </S.SearchEngineFilters>
  );
};

export default SearchEngineFilters;
