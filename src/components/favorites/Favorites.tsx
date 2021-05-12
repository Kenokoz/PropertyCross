import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../store/reducers/combineReducer';
import './Favorites.scss';

const Favorites: React.FC = () => {
  const {
    property: { favorites },
  } = useTypedSelector((state: RootState) => state);

  console.log(favorites);

  return (
    <>
      {favorites.map(fav => (
        <h1 key={fav.id}>{fav.title}</h1>
      ))}
    </>
  );
};

export default Favorites;
