import { useEffect, useState } from "react";
import { getSearchData } from "../../../services";
import * as S from "./styles";

const SearchEngine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPageData();
  }, []);

  const getPageData = () => {
    setData(getSearchData());
  };

  return <S.SearchEngine>Search Engine Implementation</S.SearchEngine>;
};

export default SearchEngine;
