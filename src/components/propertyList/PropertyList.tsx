import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
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

  const url = `/locations/${selectedLocation.id}/properties?page=${currentPage}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties(url));
  }, []);

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
            <strong>20</strong> of <strong>{totalResults}</strong> matches
          </div>
          <Pagination url={url} />
        </div>
        <PropertyCards />
      </div>
      <Pagination url={url} />
    </div>
  );
};

export default PropertyList;
