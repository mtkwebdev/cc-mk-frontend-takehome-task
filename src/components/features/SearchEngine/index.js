import { useEffect, useState } from "react";
import { getSearchData } from "../../../services";
import * as S from "./styles";
import Text from "../../common/Text";
import SearchEngineFilters from "./Filters";

import SearchEngineResults from "./Results";

const SearchEngine = () => {
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
