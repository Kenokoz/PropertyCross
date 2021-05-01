import React, { ChangeEvent, MouseEvent } from 'react';
import { connect } from 'react-redux';

import SearchForm from './searchForm/SearchForm';
import RecentSearches from './recentSearches/RecentSearches';
import Header from './header/Header';
import LocationList from './locationList/LocationList';
import {
  onInputChanged,
  onGoClicked,
} from '../../store/actionCreators/searchProperty';
import { Location } from '../../types/location';
import './SearchProperty.scss';

interface SearchPropertyProps {
  inputValue: string;
  showLocations: boolean;
  locations: Location[];
  onInputChanged(e: ChangeEvent): void;
  onGoClicked(
    e: MouseEvent,
    locations: Location[],
    inputLocationName: string
  ): void;
}

const SearchProperty: React.FC<SearchPropertyProps> = ({
  showLocations,
  inputValue,
  locations,
  onInputChanged,
  onGoClicked,
}) => {
  const items = showLocations ? (
    <LocationList locationName={inputValue} />
  ) : (
    <RecentSearches />
  );

  return (
    <div className="container">
      <Header />
      <section className="search">
        <div className="search__instruction">
          Use the form below to search for houses to buy. You can search by
          place-name, postcode, or click &#39;My location&#39;, to search in
          your current location!
        </div>
        <SearchForm
          onGo={onGoClicked}
          onInputChanged={onInputChanged}
          inputLocationName={inputValue}
          locations={locations}
        />
        {items}
      </section>
    </div>
  );
};

const mapStateToProps = ({ searchProperty }) => ({
  inputValue: searchProperty.inputValue,
  showLocations: searchProperty.showLocations,
  locations: searchProperty.locations,
});
const mapDispatchToProps = { onInputChanged, onGoClicked };

export default connect(mapStateToProps, mapDispatchToProps)(SearchProperty);
