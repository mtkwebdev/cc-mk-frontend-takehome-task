import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import InputField from "../../../common/InputFIeld";
import Dropdown from "../../../common/Dropdown";
import Button from "../../../common/Button";
import Text from "../../../common/Text";

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
  setSearchResultSortOrder,
  setSearchResultPageSize,
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
  const sortByOptions = useSelector(state => state.searchEngineData?.sortByList);
  const sizeOptions = useSelector(state => state.searchEngineData?.pagination.sizeOptions);

  const selectedCategory = useSelector(state => state.searchEngineData?.selectedCategory);
  const selectedDecision = useSelector(state => state.searchEngineData?.selectedDecision);
  const selectedCompany = useSelector(state => state.searchEngineData?.selectedCompany);
  const selectedDate = useSelector(state => state.searchEngineData?.selectedDate);
  const sortBy = useSelector(state => state.searchEngineData?.pagination.sortBy);
  const pageSize = useSelector(state => state.searchEngineData?.pagination.size);
  const totalPages = useSelector(state => state.searchEngineData?.pagination.totalPages);
  const searchResultsCount = useSelector(state => state.searchEngineData?.searchResultsCount);

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
            {`Showing results of 1-${totalPages} of ${searchResultsCount}`}
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
