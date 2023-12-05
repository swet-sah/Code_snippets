import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { AlumniContext } from './AlumniContext';

const AlumniPagination = () => {
  const { currentPage, totalPages, handlePageChange } = useContext(
    AlumniContext
  );

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination>{renderPaginationItems()}</Pagination>
    </div>
  );
};

export default AlumniPagination;
