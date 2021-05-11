import React from 'react';

import './PropertyCards.scss';
import { usedTypedSelector } from '../../../hooks/useTypedSelector';
import { RootState } from '../../../store/reducers/combineReducer';
import { Link } from 'react-router-dom';

const PropertyCards: React.FC = () => {
  const { properties } = usedTypedSelector(
    (state: RootState) => state.property
  );
  const amountOfSymbols = 35;

  return (
    <>
      {properties.map(({ id, title, imgUrl, priceCurrency, price }) => (
        <div key={id} className="properties__card">
          <Link to="/locations/:locationName/1" className="property__img">
            <img src={imgUrl} alt="" />
          </Link>
          <div className="property__descr">
            <div className="property__price">
              {price}
              <span className="property__currency">{priceCurrency}</span>
            </div>
            <Link
              to="/locations/:locationName/1"
              className="property__location"
            >
              {title.length > amountOfSymbols
                ? `${title.slice(0, amountOfSymbols)}...`
                : title}
            </Link>
          </div>
          <div className="property__favorite">
            <i className="fas fa-star"></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyCards;
