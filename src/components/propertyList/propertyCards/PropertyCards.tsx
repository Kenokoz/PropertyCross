import React from 'react';

import './PropertyCards.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { RootState } from '../../../store/reducers/combineReducer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onSelectProperty } from '../../../store/actionCreators/property';

const PropertyCards: React.FC = () => {
  const { properties } = useTypedSelector((state: RootState) => state.property);

  const dispatch = useDispatch();

  const selectPropertyHandler = (id: string) => {
    dispatch(onSelectProperty(id));
  };

  const amountOfSymbols = 35;

  return (
    <>
      {properties.map(({ id, title, imgUrl, priceCurrency, price }) => (
        <div key={id} className="properties__card">
          <Link
            to="/locations/:locationName/1"
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
              to="/locations/:locationName/1"
              className="property__location"
              onClick={() => selectPropertyHandler(id)}
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
