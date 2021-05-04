import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usedTypedSelector } from '../../hooks/useTypedSelector';
import { getProperties } from '../../store/actionCreators/property';
import { RootState } from '../../store/reducers/combineReducer';
import Header from '../header/Header';
import './PropertyList.scss';

const PropertyList: React.FC = () => {
  const {
    property: { loading, error, properties },
    searchProperty: { selectedLocation },
  } = usedTypedSelector((state: RootState) => state);

  const url = `/locations/${selectedLocation.id}/properties?page=1`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties(url));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div className="container">
      <Header />
      <div className="properties">
        <div className="properties__info">
          <strong>20</strong> of <strong>207</strong> matches
        </div>
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
              <div className="property__location">{title}</div>
            </div>
            <div className="property__favorite">
              <i className="fas fa-star"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
