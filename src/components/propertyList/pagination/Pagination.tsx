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

  let allPages = [];
  const getPages = () => {
    const pageSize = 10;
    const pagesCount = Math.ceil(totalResults / pageSize);
    allPages = [...Array(pagesCount).keys()].map(i => i + 1);
    return currentPage < 3
      ? [...allPages.slice(0, 5)]
      : [...allPages.slice(currentPage - 3, currentPage + 2)];
  };

  const dispatch = useDispatch();
  const pageClickedHandler = (page: number, e: MouseEvent) => {
    dispatch(onPageChange(page, e));
  };

  const setFirstPageHandler = (e: MouseEvent) => {
    dispatch(onPageChange(allPages[0], e));
  };

  const setLastPageHandler = (e: MouseEvent) => {
    dispatch(onPageChange(allPages[allPages.length - 1], e));
  };

  const linkClass = 'pagination__link';

  return (
    <nav className="pagination">
      <a
        href=""
        className="pagination__link"
        onClick={(e: MouseEvent) => setFirstPageHandler(e)}
      >
        <i className="fas fa-angle-double-left"></i>
      </a>
      {getPages().map(page => (
        <a
          key={page}
          href=""
          className={page === currentPage ? linkClass + '-active' : linkClass}
          onClick={(e: MouseEvent) => pageClickedHandler(page, e)}
        >
          {page}
        </a>
      ))}
      <a
        href=""
        className="pagination__link"
        onClick={(e: MouseEvent) => setLastPageHandler(e)}
      >
        <i className="fas fa-angle-double-right"></i>
      </a>
    </nav>
  );
};

export default Pagination;
