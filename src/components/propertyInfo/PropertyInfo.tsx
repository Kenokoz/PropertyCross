import React from 'react';

import './PropertyInfo.scss';

export interface PropertyInfoProps {}

const PropertyInfo: React.SFC<PropertyInfoProps> = () => {
  return (
    <section className="property__info">
      <div className="info__header">Property Details</div>
      <hr />
      <div className="info__item">
        <div className="info__wrapper">
          <div className="info__descr">
            <div className="info__price">
              <span className="info__currency">Currrency</span> 930200
            </div>
            <div className="info__location">location</div>
          </div>
          <div className="info__favorite">
            <i className="fas fa-plus-square"></i>
          </div>
        </div>
        <div className="info__img">
          <img src="https://via.placeholder.com/400" alt="" />
        </div>
        <div className="info__content">1 bed, 2 bathroom</div>
        <div className="info__summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero
          debitis impedit ipsa, exercitationem delectus iusto nihil dignissimos
          accusamus nisi!
        </div>
      </div>
      <hr />
    </section>
  );
};

export default PropertyInfo;
