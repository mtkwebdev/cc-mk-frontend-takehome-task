import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  const categories = useSelector(state => state.searchEngineData?.categoriesList);
  const decisions = useSelector(state => state.searchEngineData?.decisionsList);
  const companies = useSelector(state => state.searchEngineData?.companiesList);
  const dates = useSelector(state => state.searchEngineData?.datesList);

  useEffect(() => {
    dispatch(getMockCategoriesList());
    dispatch(getMockDecisionsList());
    dispatch(getMockCompaniesList());
    dispatch(getMockDatesList());
  }, [dispatch]);

  const setFilters = () => {
    dispatch(setSearchTerm());
    dispatch(setCategoryFilter());
    dispatch(setDecisionFilter());
    dispatch(setCompanyFilter());
    dispatch(setSelectedDateFilter());
    dispatch(filterResults());
  };

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
          isSearchBtn={true}
          onClick={setFilters}>
          Search
        </Button>
      </S.SearchBarFilter>
      <S.DropDownFilters>
        <Dropdown className="category-area" placeholder="Category" options={categories} />
        <Dropdown className="decision-area" placeholder="Decision" options={decisions} />
        <Dropdown className="company-area" placeholder="Company" options={companies} />
        <Dropdown className="date-area" placeholder="Date" options={dates} />
      </S.DropDownFilters>
    </S.SearchEngineFilters>
  );
};

export default SearchEngineFilters;
