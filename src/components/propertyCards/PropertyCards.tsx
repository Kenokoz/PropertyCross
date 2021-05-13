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
import { Property } from '../../types/property';

interface PropertyCardsProps {
  showFaves: boolean;
}

const PropertyCards: React.FC<PropertyCardsProps> = ({ showFaves }) => {
  const {
    property: { properties, favorites },
    searchProperty: { selectedLocation },
  } = useTypedSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const selectPropertyHandler = (prop: Property) => {
    dispatch(onSelectProperty(prop));
  };

  const toggleFavoriteHandler = (prop: Property) => {
    dispatch(onToggleFavorite(prop, favorites));
  };

  const amountOfSymbols = 35;
  const items = showFaves ? favorites : properties;
  const getStyles = id =>
    favorites.find(fav => fav.id === id)
      ? 'property__favorite active'
      : 'property__favorite';

  return (
    <>
      {items.map(prop => {
        const { id, imgUrl, price, priceCurrency, title } = prop;
        return (
          <div key={id} className="properties__card">
            <Link
              to={`/locations/${selectedLocation.id}/${id}`}
              className="property__img"
              onClick={() => selectPropertyHandler(prop)}
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
                onClick={() => selectPropertyHandler(prop)}
              >
                {title.length > amountOfSymbols
                  ? `${title.slice(0, amountOfSymbols)}...`
                  : title}
              </Link>
            </div>
            <div
              className={getStyles(id)}
              onClick={() => toggleFavoriteHandler(prop)}
            >
              <i className="fas fa-star"></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PropertyCards;
