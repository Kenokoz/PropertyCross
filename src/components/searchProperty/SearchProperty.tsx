import React, { Component } from 'react';

import SearchForm from './searchForm/SearchForm';
import RecentSearches from './recentSearches/RecentSearches';
import './SearchProperty.scss';

class SearchProperty extends Component {
  state = {};
  render() {
    return (
      <section className="search">
        <div className="search__instruction">
          Use the form below to search for houses to buy. You can search by
          place-name, postcode, or click &#39;My location&#39;, to search in
          your current location!
        </div>
        <SearchForm />
        <RecentSearches />
      </section>
    );
  }
}

export default SearchProperty;
