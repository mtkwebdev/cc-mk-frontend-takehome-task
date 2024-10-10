import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as S from "./styles";

import {
  incrementPagination,
  decrementPagination,
  setSearchResultPageSize,
  setCurrentPage,
} from "../../features/SearchEngine/searchEngineSlice.js";
const Pagination = () => {
  const dispatch = useDispatch();

  const numberOfPages = useSelector(state => state.searchEngineData?.pagination.totalPages) || 10;

  useEffect(() => {
    dispatch(setSearchResultPageSize({ text: "5", value: 5 }));
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(incrementPagination());
  };
  const handlePreviousPage = () => {
    dispatch(decrementPagination());
  };
  const handleSetCurrentPage = e => {
    setCurrentPage(parseInt(e.target.value));
  };

  const pageButtons = () => {
    for (let i = 0; i < 4; i) {
      return (
        <button type="button" onClick={e => handleSetCurrentPage(e)}>
          {i}
        </button>
      );
    }
  };

  return (
    <S.PaginationContainer>
      <S.PreviousButton type="button" onClick={handlePreviousPage}>
        Previous
      </S.PreviousButton>
      {pageButtons()}

      <S.NextButton type="button" onClick={handleNextPage}>
        Next
      </S.NextButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
