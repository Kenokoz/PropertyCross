import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
  const pageClickedHandler = (page: number) => {
    dispatch(onPageChange(page));
  };

  const setFirstPageHandler = () => {
    dispatch(onPageChange(1));
  };

  const setLastPageHandler = () => {
    dispatch(onPageChange(allPages[allPages.length - 1]));
  };

  const linkClass = 'pagination__link';

  return (
    <nav className="pagination">
      <Link
        to={`/locations/shifnal/properties?page=${1}`}
        className="pagination__link"
        onClick={setFirstPageHandler}
      >
        <i className="fas fa-angle-double-left"></i>
      </Link>
      {getPages().map(page => (
        <Link
          key={page}
          to={`/locations/shifnal/properties?page=${page}`}
          className={page === currentPage ? linkClass + '-active' : linkClass}
          onClick={() => pageClickedHandler(page)}
        >
          {page}
        </Link>
      ))}
      <Link
        to={`/locations/shifnal/properties?page=${
          allPages[allPages.length - 1]
        }`}
        className="pagination__link"
        onClick={setLastPageHandler}
      >
        <i className="fas fa-angle-double-right"></i>
      </Link>
    </nav>
  );
};

export default Pagination;
