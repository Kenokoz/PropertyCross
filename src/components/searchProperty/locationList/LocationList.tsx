import React from 'react';
import { useSelector } from 'react-redux';

const LocationList: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);
  return <div></div>;
};

export default LocationList;
