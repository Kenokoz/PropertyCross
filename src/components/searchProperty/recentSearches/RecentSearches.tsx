import React from 'react';
import { Link } from 'react-router-dom';

import './RecentSearches.scss';

const RecentSearches: React.FC = () => (
  <div className="list">
    <div className="list__title">Recent searches:</div>
    <div className="list__wrapper">
      <Link className="list__item" to="search/1">
        One dasd asdas da sdad as
      </Link>
      <Link className="list__item" to="search/1">
        Two
      </Link>
      <Link className="list__item" to="search/1">
        Three
      </Link>
    </div>
  </div>
);

export default RecentSearches;
