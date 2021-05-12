import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../store/reducers/combineReducer';
import './PropertyInfo.scss';

export interface PropertyInfoProps {}

const PropertyInfo: React.FC<PropertyInfoProps> = () => {
  const {
    title,
    price,
    priceCurrency,
    imgUrl,
    bedroomNumber,
    bathroomNumber,
    summary,
  } = useTypedSelector((state: RootState) => state.property.selectedProperty);

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
          <div className="info__favorite">
            <i className="fas fa-star"></i>
          </div>
        </div>

        <div className="info__content">
          <div className="info__img">
            <img src={imgUrl} alt="" />
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
