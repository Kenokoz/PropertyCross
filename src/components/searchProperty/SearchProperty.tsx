import React, { ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';

import './SearchProperty.scss';
import SearchForm from './searchForm/SearchForm';
import RecentSearches from './recentSearches/RecentSearches';
import Header from './header/Header';
import LocationList from './locationList/LocationList';
import {
  onInputChanged,
  onGoClicked,
  onLocationClicked,
} from '../../store/actionCreators/searchProperty';
import { Location } from '../../types/location';
import { SearchPropertyState } from '../../types/searchProperty';

interface SearchPropertyProps {
  inputValue: string;
  showLocations: boolean;
  locations: Location[];
  location: Location;
  onInputChanged(e: ChangeEvent): void;
  onGoClicked(
    e: FormEvent,
    locations: Location[],
    inputLocationName: string,
    history
  ): void;
  onLocationClicked(location: Location): void;
}

const SearchProperty: React.FC<SearchPropertyProps> = ({
  showLocations,
  inputValue,
  locations,
  onInputChanged,
  onGoClicked,
  onLocationClicked,
}) => {
  const items = showLocations ? (
    <LocationList onClicked={onLocationClicked} />
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

const mapStateToProps = ({
  searchProperty,
}: {
  searchProperty: SearchPropertyState;
}) => ({
  inputValue: searchProperty.inputValue,
  showLocations: searchProperty.showLocations,
  locations: searchProperty.locations,
  location: searchProperty.selectedLocation,
});
const mapDispatchToProps = {
  onInputChanged,
  onGoClicked,
  onLocationClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProperty);
