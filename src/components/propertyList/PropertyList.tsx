import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import {
  getProperties,
  onPageChange,
} from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import Header from '../header/Header';
import Pagination from './pagination/Pagination';
import PropertyCards from './propertyCards/PropertyCards';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, totalResults, currentPage },
    searchProperty: { selectedLocation },
  } = usedTypedSelector((state: RootState) => state);

  let url = `/locations/${selectedLocation.id}/properties?page=${currentPage}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties(url));
  }, []);

  const PageClickedHandler = (e, page) => {
    url = `/locations/${selectedLocation.id}/properties?page=${page}`;
    dispatch(onPageChange(e, page));
    dispatch(getProperties(url));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div className="container">
      <Header />
      <div className="properties">
        <div className="properties__info">
          <div className="properties__count">
            <strong>{totalResults}</strong> matches
          </div>
          <Pagination onPageClicked={PageClickedHandler} />
        </div>
        <PropertyCards />
        <Pagination onPageClicked={PageClickedHandler} />
      </div>
    </div>
  );
};

export default PropertyList;
