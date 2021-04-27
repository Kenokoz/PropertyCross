import React from 'react';

import './RecentSearches.scss';

const RecentSearches = () => {
  return (
    <div className="search__recent">
      <div className="searches">
        <div className="searches__title">Recent searches:</div>
        <div className="searches__wrapper">
          <div className="searches__item">One dasd asdas da sdad as</div>
          <div className="searches__item">Two</div>
          <div className="searches__item">Three</div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
