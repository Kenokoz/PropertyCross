import React from 'react';

import './SearchForm.scss';

const SearchForm = () => {
  return (
    <div className="search__form">
      <form className="form">
        <div className="form__wrapper">
          <input className="form__input" type="text" placeholder="Name" />
        </div>
        <div className="form__wrapper">
          <button className="form__goBtn">Go</button>
          <button className="form__locBtn">My&#160;location</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
