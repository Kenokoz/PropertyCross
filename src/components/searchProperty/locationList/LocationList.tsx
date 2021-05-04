import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../../store/reducers/combineReducer';
import { Location } from '../../../types/location';

interface LocationListProps {
  locations: Location[];
  onClicked(location: Location): void;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  onClicked,
}) => (
  <div className="list">
    <div className="list__title">Please select a location below:</div>
    <div className="list__wrapper">
      {locations.map(({ id, name }) => (
        <Link
          className="list__item"
          to={`locations/${id}`}
          key={id}
          onClick={() => onClicked({ name, id })}
        >
          {name}
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  locations: state.searchProperty.locations,
});

export default connect(mapStateToProps)(LocationList);
