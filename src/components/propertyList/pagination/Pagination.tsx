import React, { MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../../hooks/useTypedSelector';
import { RootState } from '../../../store/reducers/combineReducer';
import {
  getProperties,
  onPageChange,
} from '../../../store/actionCreators/property';

import './Pagination.scss';

interface PaginationProps {
  url: string;
}

const Pagination: React.FC<PaginationProps> = ({ url }) => {
  const { totalResults, properties } = usedTypedSelector(
    (state: RootState) => state.property
  );
  const pageSize = properties.length;

  const pagesCount = Math.ceil(50 / pageSize);
  const pages = [...Array(pagesCount).keys()].map(i => i + 1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch;
  });
  const onPageClicked = (e, page) => {
    dispatch(onPageChange(e, page));
    dispatch(getProperties(url));
  };

  return (
    <nav className="pagination">
      <a href="" className="pagination__link">
        <i className="fas fa-chevron-left"></i>
      </a>
      {pages.map(page => (
        <a
          key={page}
          href=""
          className="pagination__link"
          onClick={(e: MouseEvent) => onPageClicked(e, page)}
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
