import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { useLocation, useParams } from 'react-router';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import Pagination from './pagination/Pagination';
import PropertyCards from './propertyCards/PropertyCards';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, totalResults, currentPage },
    searchProperty: { selectedLocation },
  } = usedTypedSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const params: { locationName: string } = useParams();
  const page = useLocation().search.slice(6);

  useEffect(() => {
    const url = `/locations/${params.locationName}/properties?page=${page}`;
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
      <PropertyCards />
      <Pagination />
    </section>
  );
};

export default PropertyList;
