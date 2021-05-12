import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { onToggleFavorite } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import { Property } from '../../types/property';
import './PropertyInfo.scss';

const PropertyInfo: React.FC = () => {
  const { selectedProperty, favorites } = useTypedSelector(
    (state: RootState) => state.property
  );

  const {
    id,
    title,
    price,
    priceCurrency,
    imgUrl,
    bedroomNumber,
    bathroomNumber,
    summary,
  } = selectedProperty;

  const dispatch = useDispatch();

  const toggleFavoriteHandler = (prop: Property) => {
    dispatch(onToggleFavorite(prop));
  };

  const getStyles = id =>
    favorites.find(fav => fav.id === id)
      ? 'info__favorite active'
      : 'info__favorite';

  return (
    <section className="property__info">
      <div className="info__header">Property Details</div>
      <hr />
      <div className="info__item">
        <div className="info__wrapper">
          <div className="info__descr">
            <div className="info__price">
              <span className="info__currency">{priceCurrency}</span> {price}
            </div>
            <div className="info__location">{title}</div>
          </div>
          <div
            className={getStyles(id)}
            onClick={() => toggleFavoriteHandler(selectedProperty)}
          >
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="info__content">
          <div className="info__img">
            <img src={imgUrl} alt="image" />
          </div>
          <div className="info__concise">
            <div className="info__specification">
              {bedroomNumber} bed, {bathroomNumber} bathroom
            </div>
            <div className="info__summary">{summary}</div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default PropertyInfo;
