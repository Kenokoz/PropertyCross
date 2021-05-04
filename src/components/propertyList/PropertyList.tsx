import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, properties },
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
    <>
      {properties.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export default PropertyList;
