import React from 'react';

import './PropertyCards.scss';
import { usedTypedSelector } from '../../../hooks/useTypedSelector';
import { RootState } from '../../../store/reducers/combineReducer';

const PropertyCards: React.FC = () => {
  const { properties } = usedTypedSelector(
    (state: RootState) => state.property
  );
  const amountOfSymbols = 35;

  return (
    <>
      {properties.map(({ id, title, imgUrl, priceCurrency, price }) => (
        <div key={id} className="properties__card">
          <div className="property__img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="property__descr">
            <div className="property__price">
              {price}
              <span className="property__currency">{priceCurrency}</span>
            </div>
            <div className="property__location">
              {title.length > amountOfSymbols
                ? `${title.slice(0, amountOfSymbols)}...`
                : title}
            </div>
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
