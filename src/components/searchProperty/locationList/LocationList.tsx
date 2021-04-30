import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Location } from '../../../types/location';

interface LocationListProps {
  locations: Location[];
  locationName: string;
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => (
  <div className="list">
    <div className="list__title">Please select a location below:</div>
    <div className="list__wrapper">
      {locations.map(({ id, name }) => (
        <Link className="list__item" to={`locations/${id}`} key={id}>
          {name}
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ searchProperty }) => ({
  locations: searchProperty.locations,
});

export default connect(mapStateToProps)(LocationList);
