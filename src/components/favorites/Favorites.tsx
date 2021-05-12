import React from 'react';

import PropertyCards from '../propertyCards/PropertyCards';
import './Favorites.scss';

const Favorites: React.FC = () => (
  <>
    <div className="faves">Favorites:</div>
    <PropertyCards showFaves />
  </>
);

export default Favorites;
