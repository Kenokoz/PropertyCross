import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProperties } from '../../store/actionCreators/property';
import './PropertyList.scss';

interface PropertyListProps {
  selectedLocation: string;
}

const PropertyList: React.FC<PropertyListProps> = ({ selectedLocation }) => {
  const { properties, loading, error } = usedTypedSelector(
    state => state.property
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProperties(selectedLocation));
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

const mapToStateProps = ({ searchProperty }) => ({
  selectedLocation: searchProperty.selectedLocation,
});

export default connect(mapToStateProps)(PropertyList);
