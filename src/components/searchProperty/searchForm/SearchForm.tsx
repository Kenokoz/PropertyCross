import React from 'react';
import { Link } from 'react-router-dom';

import './SearchForm.scss';

const SearchForm: React.FC = () => (
  <div className="search__form">
    <form className="form">
      <div className="form__wrapper">
        <input className="form__input" type="text" placeholder="Name" />
      </div>
      <div className="form__wrapper">
        <Link className="form__goBtn" to="/search">
          Go
        </Link>
        <Link className="form__locBtn" to="/location">
          My&#160;location
        </Link>
      </div>
    </form>
  </div>
);

export default SearchForm;
