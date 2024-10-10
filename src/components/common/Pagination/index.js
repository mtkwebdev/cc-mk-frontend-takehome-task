import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Button from "../Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = page => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button key={i} type="button" onClick={() => handlePageClick(i)} isActive={currentPage === i}>
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <S.PaginationContainer>
      <Button type="button" onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>

      {renderPageNumbers()}

      <Button type="button" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </S.PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
