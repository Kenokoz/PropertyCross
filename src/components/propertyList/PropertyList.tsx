import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './PropertyList.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import Pagination from './pagination/Pagination';
import PropertyCards from '../propertyCards/PropertyCards';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, totalResults, currentPage, pageSize },
    searchProperty: { selectedLocation },
  } = useTypedSelector((state: RootState) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties(selectedLocation.id, currentPage));
  }, [currentPage]);

  if (error) {
    return <Error />;
  }

  const getAmountOfCurrentProperties = () => {
    const amount = currentPage * pageSize;
    return amount > totalResults ? totalResults : amount;
  };

  return (
    <section className="properties">
      <div className="properties__info">
        <div className="properties__count">
          <strong>{getAmountOfCurrentProperties()}</strong> of{' '}
          <strong>{totalResults}</strong> matches
        </div>
        <Pagination />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <PropertyCards showFaves={false} />
          <Pagination />
        </>
      )}
    </section>
  );
};

export default PropertyList;
