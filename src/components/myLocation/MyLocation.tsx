import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './MyLocation.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getMyLocation } from '../../store/actionCreators/myLocation';
import { RootState } from '../../store/reducers/combineReducer';

const MyLocation: React.FC = () => {
  const { myLocation } = useTypedSelector(
    (state: RootState) => state.searchProperty
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyLocation());
  }, []);

  return (
    <div className="coords">
      <div className="coords__title">Your location:</div>
      <div className="coords__lat">Latitude: {myLocation.latitude}</div>
      <div className="coords__long">Longitude: {myLocation.longitude}</div>
    </div>
  );
};

export default MyLocation;
