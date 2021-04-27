import React from 'react';

import SearchForm from './searchForm/SearchForm';
import RecentSearches from './recentSearches/RecentSearches';
import './SearchProperty.scss';
import Header from './header/Header';

const SearchProperty = () => (
  <div className="container">
    <Header />
    <section className="search">
      <div className="search__instruction">
        Use the form below to search for houses to buy. You can search by
        place-name, postcode, or click &#39;My location&#39;, to search in your
        current location!
      </div>
      <SearchForm />
      <RecentSearches />
    </section>
  </div>
);

export default SearchProperty;
