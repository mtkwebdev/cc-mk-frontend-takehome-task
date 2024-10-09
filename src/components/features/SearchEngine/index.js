import { useEffect } from "react";
import { getSearchData } from "../../../services";
import * as S from "./styles";
import Text from "../../common/Text";
import SearchEngineFilters from "./Filters";
import SearchEngineResults from "./Results";

import { useDispatch } from "react-redux";
import {
  getMockSearchResults,
  getMockCategoriesLists,
  getMockDecisionsLists,
  getMockCompaniesLists,
  getMockDatesLists,
} from "../../../services/thunks/getDataLists.js";

const SearchEngine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMockSearchResults());
    dispatch(getMockCategoriesLists());
    dispatch(getMockDecisionsLists());
    dispatch(getMockCompaniesLists());
    dispatch(getMockDatesLists());
  }, [dispatch]);

  return (
    <S.SearchEngine>
      <Text className="header-area" as={"TextXl"}>
        AI-Powered Regulatory Search
      </Text>

      <Text className="subheader-area" as={"TextSm"} isSubdued={true}>
        Use the search engine to search for publications from courts and regulators.
      </Text>

      <SearchEngineFilters />
      <SearchEngineResults />
    </S.SearchEngine>
  );
};

export default SearchEngine;
