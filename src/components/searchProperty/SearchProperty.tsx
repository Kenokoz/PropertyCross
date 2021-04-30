import React from 'react';
import { connect } from 'react-redux';

import SearchForm from './searchForm/SearchForm';
import RecentSearches from './recentSearches/RecentSearches';
import Header from './header/Header';
import LocationList from './locationList/LocationList';
import { SearchPropertyActionTypes } from '../../types/searchProperty';
import { onInputChanged } from '../../store/actionCreators/searchProperty';
import './SearchProperty.scss';

interface SearchPropertyProps {
  inputValue: string;
  showLocations: boolean;
  locations: { name: string; id: string }[];
  onShowLocations(): void;
  onInputChanged(): void;
}

const SearchProperty: React.FC<SearchPropertyProps> = props => {
  const {
    showLocations,
    inputValue,
    locations,
    onShowLocations,
    onInputChanged,
  } = props;

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
          onGo={onShowLocations}
          onInputChanged={onInputChanged}
          locationName={inputValue}
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

const mapDispatchToProps = dispatch => {
  return {
    onInputChanged, //  как передать dispatch?
    onShowLocations: (e, locName, locations) => {
      const isExist = locations.find(
        loc => loc.name.toLowerCase() === locName.toLowerCase()
      );

      isExist ? null : e.preventDefault();

      dispatch({
        type: SearchPropertyActionTypes.SHOW_LOCATIONS,
        payload: true,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProperty);
