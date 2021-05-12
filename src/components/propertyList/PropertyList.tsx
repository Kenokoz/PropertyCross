import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import Pagination from './pagination/Pagination';
import PropertyCards from '../propertyCards/PropertyCards';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, totalResults, currentPage },
    searchProperty: { selectedLocation },
  } = useTypedSelector((state: RootState) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = `/locations/${selectedLocation.id}/properties?page=${currentPage}`;
    dispatch(getProperties(url));
  }, [currentPage]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <section className="properties">
      <div className="properties__info">
        <div className="properties__count">
          <strong>{totalResults}</strong> matches
        </div>
        <Pagination />
      </div>
      <PropertyCards showFaves={false} />
      <Pagination />
    </section>
  );
};

export default PropertyList;
