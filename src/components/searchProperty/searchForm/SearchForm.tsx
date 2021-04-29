import React from 'react';

import './SearchForm.scss';

interface SearchFormProps {
  onGo: (e) => void;
}

const SearchForm: React.FC<SearchFormProps> = props => (
  <div className="search__form">
    <form className="form">
      <div className="form__wrapper">
        <input className="form__input" type="text" placeholder="Name" />
      </div>
      <div className="form__wrapper">
        <button
          className="form__goBtn"
          type="submit"
          onClick={e => props.onGo(e)}
        >
          Go
        </button>
        <button className="form__locBtn">My&#160;location</button>
      </div>
    </form>
  </div>
);

export default SearchForm;
