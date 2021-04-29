import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProperties } from '../../store/actionCreators/property';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const { properties, loading, error } = usedTypedSelector(
    state => state.property
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div>
      {properties.map(prop => (
        <div key={prop.id}>{prop.title}</div>
      ))}
    </div>
  );
};

export default PropertyList;
