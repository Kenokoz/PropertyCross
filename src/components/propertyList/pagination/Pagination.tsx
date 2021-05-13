import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import './Pagination.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { onPageChange } from '../../../store/actionCreators/property';
import { RootState } from '../../../store/reducers/combineReducer';

const Pagination: React.FC = () => {
  const {
    property: { totalResults, currentPage, pageSize },
    searchProperty: { selectedLocation },
  } = useTypedSelector((state: RootState) => state);

  let allPages = [];
  const getPages = () => {
    const pagesCount = Math.ceil(totalResults / pageSize);
    allPages = [...Array(pagesCount).keys()].map(i => i + 1);
    return currentPage < 3
      ? [...allPages.slice(0, 5)]
      : [...allPages.slice(currentPage - 3, currentPage + 2)];
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const pageClickedHandler = (page: number) => {
    history.replace('/');
    dispatch(onPageChange(page));
  };

  const setFirstPageHandler = () => {
    history.replace('/');
    dispatch(onPageChange(1));
  };

  const setLastPageHandler = () => {
    history.replace('/');
    dispatch(onPageChange(allPages[allPages.length - 1]));
  };

  const linkClass = 'pagination__link';

  return (
    <nav className="pagination">
      <Link
        to={`/locations/${selectedLocation.id}`}
        className={linkClass}
        onClick={setFirstPageHandler}
      >
        <i className="fas fa-angle-double-left"></i>
      </Link>
      {getPages().map(page => (
        <Link
          key={page}
          to={`/locations/${selectedLocation.id}`}
          className={page === currentPage ? linkClass + '-active' : linkClass}
          onClick={() => pageClickedHandler(page)}
        >
          {page}
        </Link>
      ))}
      <Link
        to={`/locations/${selectedLocation.id}`}
        className={linkClass}
        onClick={setLastPageHandler}
      >
        <i className="fas fa-angle-double-right"></i>
      </Link>
    </nav>
  );
};

export default Pagination;
