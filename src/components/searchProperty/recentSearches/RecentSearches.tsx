import React from 'react';
import { Link } from 'react-router-dom';

import './RecentSearches.scss';

const RecentSearches = () => (
  <div className="search__recent">
    <div className="searches">
      <div className="searches__title">Recent searches:</div>
      <div className="searches__wrapper">
        <Link className="searches__item" to="search/1">
          One dasd asdas da sdad as
        </Link>
        <Link className="searches__item" to="search/1">
          Two
        </Link>
        <Link className="searches__item" to="search/1">
          Three
        </Link>
      </div>
    </div>
  </div>
);

export default RecentSearches;
