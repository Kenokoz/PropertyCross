import React from 'react';
import { connect } from 'react-redux';

import SearchForm from './searchForm/SearchForm';
import RecentSearches from './recentSearches/RecentSearches';
import Header from './header/Header';
import LocationList from './locationList/LocationList';
import './SearchProperty.scss';
import {
  SearchPropertyActionTypes,
  SearchPropertyState,
} from '../../types/searchProperty';

interface SearchPropertyProps {
  showLocations: boolean;
  onShowLocations: () => void;
}

const SearchProperty: React.FC<SearchPropertyProps> = props => {
  const items = props.showLocations ? <LocationList /> : <RecentSearches />;

  return (
    <div className="container">
      <Header />
      <section className="search">
        <div className="search__instruction">
          Use the form below to search for houses to buy. You can search by
          place-name, postcode, or click &#39;My location&#39;, to search in
          your current location!
        </div>
        <SearchForm onGo={props.onShowLocations} />
        {items}
      </section>
    </div>
  );
};

const mapStateToProps = ({ searchProperty }) => {
  return {
    inputValue: searchProperty.inputValue,
    showLocations: searchProperty.showLocations,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowLocations: e => {
      e.preventDefault();
      dispatch({
        type: SearchPropertyActionTypes.SHOW_LOCATIONS,
        payload: true,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProperty);
