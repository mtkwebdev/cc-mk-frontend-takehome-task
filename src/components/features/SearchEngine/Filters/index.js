import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import InputField from "../../../common/InputField/index.js";
import Dropdown from "../../../common/Dropdown";
import Button from "../../../common/Button";
import Text from "../../../common/Text";

import { COLOURS } from "../../../../enums/colours";

import {
  getMockCategoriesOptions,
  getMockDecisionsOptions,
  getMockCompaniesOptions,
  getMockDatesOptions,
} from "../../../../services/thunks/getDataOptions.js";

import {
  filterResults,
  setSearchTerm,
  setCategoryFilter,
  setDecisionFilter,
  setCompanyFilter,
  setSelectedDateFilter,
  clearAllFilters,
  setSearchResultSortOrder,
  setSearchResultPageSize,
  categoryOptionsState,
  decisionOptionsState,
  companyOptionsState,
  dateOptionsState,
  sortByOptionsState,
  sizeOptionsState,
  selectedCategoryState,
  selectedDecisionState,
  selectedCompanyState,
  selectedDateState,
  sortByState,
  pageSizeState,
  firstResultIndexState,
  lastResultIndexState,
  searchResultsCountState,
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
  const categoryOptions = useSelector(categoryOptionsState);
  const decisionOptions = useSelector(decisionOptionsState);
  const companyOptions = useSelector(companyOptionsState);
  const dateOptions = useSelector(dateOptionsState);
  const sortByOptions = useSelector(sortByOptionsState);
  const sizeOptions = useSelector(sizeOptionsState);

  const selectedCategory = useSelector(selectedCategoryState);
  const selectedDecision = useSelector(selectedDecisionState);
  const selectedCompany = useSelector(selectedCompanyState);
  const selectedDate = useSelector(selectedDateState);
  const sortBy = useSelector(sortByState);
  const pageSize = useSelector(pageSizeState);
  const firstResultIndex = useSelector(firstResultIndexState);
  const lastResultIndex = useSelector(lastResultIndexState);
  const searchResultsCount = useSelector(searchResultsCountState);

  useEffect(() => {
    dispatch(getMockCategoriesOptions());
    dispatch(getMockDecisionsOptions());
    dispatch(getMockCompaniesOptions());
    dispatch(getMockDatesOptions());
  }, [dispatch]);

  return (
    <S.SearchEngineFilters>
      <S.SearchBarFilter>
        <InputField
          placeholder="Search"
          type="search"
          label="search"
          isSearchInput={true}
          onChange={value => dispatch(setSearchTerm(value))}
        />
        <Button
          type="button"
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
          placeholder="Category"
          options={categoryOptions}
          updateState={state => setCategoryFilter(state)}
          value={selectedCategory}
        />
        <Dropdown
          placeholder="Decision"
          options={decisionOptions}
          updateState={state => setDecisionFilter(state)}
          value={selectedDecision}
        />
        <Dropdown
          placeholder="Company"
          options={companyOptions}
          updateState={state => setCompanyFilter(state)}
          value={selectedCompany}
        />
        <Dropdown
          placeholder="Date"
          options={dateOptions}
          updateState={state => setSelectedDateFilter(state)}
          value={selectedDate}
          isDateInput={true}
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
      <S.SearchResultPageDetailsContainer>
        <div>
          <Text as="TextXl"> Results</Text>
          <Text as="TextBody" isSubdued={true}>
            {`Showing results of ${firstResultIndex} - ${lastResultIndex} of ${searchResultsCount}`}
          </Text>
        </div>

        <Dropdown
          options={sortByOptions}
          updateState={state => setSearchResultSortOrder(state)}
          value={sortBy}
          placeholder={sortBy?.text}
          isReturnObject={true}
        />

        <Dropdown
          options={sizeOptions}
          updateState={state => setSearchResultPageSize(state)}
          value={pageSize}
          placeholder={pageSize?.text}
          isReturnObject={true}
        />
      </S.SearchResultPageDetailsContainer>
    </S.SearchEngineFilters>
  );
};

export default SearchEngineFilters;
