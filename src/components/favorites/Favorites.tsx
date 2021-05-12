import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../store/reducers/combineReducer';
import PropertyCards from '../propertyCards/PropertyCards';
import './Favorites.scss';

const Favorites: React.FC = () => {
  const faves = useTypedSelector(
    (state: RootState) => state.property.favorites
  );
  const content =
    faves.length !== 0 ? (
      <PropertyCards showFaves />
    ) : (
      <div className="faves__warn">You do not have any favorites.</div>
    );

  return (
    <div className="faves">
      <div className="faves__header">Favorites</div>
      {content}
    </div>
  );
};

export default Favorites;
