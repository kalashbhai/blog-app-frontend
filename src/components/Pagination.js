import React, { useState, useEffect } from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];

  // calculate total number of pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setActivePage(1);
  }, [totalItems]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className='page-item'>
            <button
              onClick={() => handlePageChange(pageNumber)}
              className={`page-link ${pageNumber === activePage ? 'active' : ''}`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
