import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChevronIcon from "../../icons/ChevronIcon";

import * as S from "./styles";

import {
  incrementPagination,
  decrementPagination,
  setCurrentSearchResultPage,
  setCurrentPage,
} from "../../features/SearchEngine/searchEngineSlice.js";
const Pagination = () => {
  const dispatch = useDispatch();

  const numberOfPages = useSelector(state => state.searchEngineData?.pagination.totalPages);
  console.log(numberOfPages);

  useEffect(() => {
    dispatch(setCurrentSearchResultPage());
  });

  const handleNextPage = () => {
    dispatch(incrementPagination());
  };
  const handlePreviousPage = () => {
    dispatch(decrementPagination());
  };
  const handleSetCurrentPage = e => {
    console.log(parseInt(e.target.innerText));
    dispatch(setCurrentPage(parseInt(e.target.innerText)));
  };

  const pageButtons = () => {
    const pages = Array.from(Array(numberOfPages).keys());
    return (
      <>
        {pages?.map(pageNumber => (
          <S.PageButton type="button" onClick={e => handleSetCurrentPage(e)} key={`pagination-btn-${pageNumber}`}>
            {pageNumber + 1}
          </S.PageButton>
        ))}
      </>
    );
  };

  return (
    <S.PaginationContainer>
      <S.PreviousButton className="paginator-btn" type="button" onClick={handlePreviousPage}>
        <ChevronIcon size="lg" />
      </S.PreviousButton>
      {pageButtons()}
      <S.NextButton className="paginator-btn" type="button" onClick={handleNextPage}>
        <ChevronIcon size="lg" />
      </S.NextButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
