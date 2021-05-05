import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import Header from '../header/Header';
import PropertyCards from './propertyCards/PropertyCards';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, totalResults },
    searchProperty: { selectedLocation },
  } = usedTypedSelector((state: RootState) => state);

  const url = `/locations/${selectedLocation.id}/properties?page=1`;
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
          <strong>20</strong> of <strong>{totalResults}</strong> matches
        </div>
        <PropertyCards />
      </div>
    </div>
  );
};

export default PropertyList;
