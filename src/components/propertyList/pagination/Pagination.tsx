import React from 'react';

import './Pagination.scss';

const Pagination: React.FC = () => {
  return (
    <nav className="pagination">
      <a href="" className="pagination__link">
        <i className="fas fa-chevron-left"></i>
      </a>
      <a href="" className="pagination__link-active">
        1
      </a>
      <a href="" className="pagination__link">
        2
      </a>
      <a href="" className="pagination__link">
        3
      </a>
      <a href="" className="pagination__link">
        4
      </a>
      <a href="" className="pagination__link">
        5
      </a>
      <a href="" className="pagination__link">
        <i className="fas fa-chevron-right"></i>
      </a>
    </nav>
  );
};

export default Pagination;
