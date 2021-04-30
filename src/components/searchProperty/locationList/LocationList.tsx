import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface LocationListProps {
  locations: { name: string; id: string }[];
  locationName: string;
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => (
  <div className="search__recent">
    <div className="searches__title">Please select a location below:</div>
    <div className="searches__wrapper">
      {locations.map(loc => (
        <Link
          className="searches__item"
          to={`locations/${loc.id}/properties?page=1`}
          key={loc.id}
        >
          {loc.name}
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ searchProperty }) => ({
  locations: searchProperty.locations,
});

export default connect(mapStateToProps)(LocationList);
