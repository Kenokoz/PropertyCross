import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../../hooks/useTypedSelector';
import { onPageChange } from '../../../store/actionCreators/property';
import { RootState } from '../../../store/reducers/combineReducer';
import './Pagination.scss';

const Pagination: React.FC = () => {
  const { totalResults, currentPage } = usedTypedSelector(
    (state: RootState) => state.property
  );

  const getPages = () => {
    const pageSize = 10;
    const pagesCount = Math.ceil(totalResults / pageSize);
    const allPages = [...Array(pagesCount).keys()].map(i => i + 1);
    return currentPage === 1
      ? [...allPages.slice(0, 5)]
      : [...allPages.slice(currentPage - 3, currentPage + 2)];
  };

  const dispatch = useDispatch();
  const pageClickedHandler = (e: MouseEvent, page: number) => {
    dispatch(onPageChange(e, page));
  };

  const linkClass = 'pagination__link';

  return (
    <nav className="pagination">
      <a href="" className="pagination__link">
        <i className="fas fa-chevron-left"></i>
      </a>
      {getPages().map(page => (
        <a
          key={page}
          href=""
          className={page === currentPage ? linkClass + '-active' : linkClass}
          onClick={(e: MouseEvent) => pageClickedHandler(e, page)}
        >
          {page}
        </a>
      ))}
      <a href="" className="pagination__link">
        <i className="fas fa-chevron-right"></i>
      </a>
    </nav>
  );
};

export default Pagination;
