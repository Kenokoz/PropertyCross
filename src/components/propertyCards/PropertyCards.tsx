import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './PropertyCards.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../store/reducers/combineReducer';
import {
  onToggleFavorite,
  onSelectProperty,
} from '../../store/actionCreators/property';

interface PropertyCardsProps {
  showFaves: boolean;
}

const PropertyCards: React.FC<PropertyCardsProps> = ({ showFaves }) => {
  const {
    property: { properties, favorites },
    searchProperty: { selectedLocation },
  } = useTypedSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const selectPropertyHandler = (id: string) => {
    dispatch(onSelectProperty(id));
  };

  const toggleFavoriteHandler = (id: string) => {
    dispatch(onToggleFavorite(id));
  };

  const amountOfSymbols = 35;
  const items = showFaves ? favorites : properties;

  return (
    <>
      {items.map(({ id, title, imgUrl, priceCurrency, price }) => (
        <div key={id} className="properties__card">
          <Link
            to={`/locations/${selectedLocation.id}/${id}`}
            className="property__img"
            onClick={() => selectPropertyHandler(id)}
          >
            <img src={imgUrl} alt="" />
          </Link>
          <div className="property__descr">
            <div className="property__price">
              {price}
              <span className="property__currency">{priceCurrency}</span>
            </div>
            <Link
              to={`/locations/${selectedLocation.id}/${id}`}
              className="property__location"
              onClick={() => selectPropertyHandler(id)}
            >
              {title.length > amountOfSymbols
                ? `${title.slice(0, amountOfSymbols)}...`
                : title}
            </Link>
          </div>
          <div
            className={
              favorites.find(fav => fav.id === id)
                ? 'property__favorite active'
                : 'property__favorite'
            }
            onClick={() => toggleFavoriteHandler(id)}
          >
            <i className="fas fa-star"></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyCards;
