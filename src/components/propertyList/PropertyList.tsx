import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import { Location } from '../../types/location';
import './PropertyList.scss';

interface PropertyListProps {
  selectedLocation: Location;
}

const PropertyList: React.FC<PropertyListProps> = ({ selectedLocation }) => {
  const { properties, loading, error } = usedTypedSelector(
    state => state.property
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties(selectedLocation));
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

const mapToStateProps = ({ searchProperty }: RootState) => ({
  selectedLocation: searchProperty.selectedLocation,
});

export default connect(mapToStateProps)(PropertyList);
