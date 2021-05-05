import React, { MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../../hooks/useTypedSelector';
import { RootState } from '../../../store/reducers/combineReducer';
import './Pagination.scss';

interface PaginationProps {
  onPageClicked: (e, page) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageClicked }) => {
  const { totalResults, properties, currentPage } = usedTypedSelector(
    (state: RootState) => state.property
  );
  const pageSize = properties.length;

  const pagesCount = Math.ceil(totalResults / pageSize);
  const pages = [...Array(pagesCount).keys()].map(i => i + 1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch;
  });

  const linkClass = 'pagination__link';

  return (
    <nav className="pagination">
      <a href="" className="pagination__link">
        <i className="fas fa-chevron-left"></i>
      </a>
      <div className="pages__wrapper">
        {pages.map(page => (
          <a
            key={page}
            href=""
            className={page === currentPage ? linkClass + '-active' : linkClass}
            onClick={(e: MouseEvent) => onPageClicked(e, page)}
          >
            {page}
          </a>
        ))}
      </div>

      <a href="" className="pagination__link">
        <i className="fas fa-chevron-right"></i>
      </a>
    </nav>
  );
};

export default Pagination;
