import React from 'react';
import { Link } from 'react-router-dom';

import './SearchForm.scss';

interface SearchFormProps {
  onGo: (e, locName, locations) => void;
  onInputChanged: (e) => void;
  locationName: string;
  locations: any[];
}

const SearchForm: React.FC<SearchFormProps> = props => (
  <div className="search__form">
    <form className="form">
      <div className="form__wrapper">
        <input
          className="form__input"
          type="text"
          placeholder="Name"
          onChange={e => props.onInputChanged(e)}
        />
      </div>
      <div className="form__wrapper">
        <Link
          to="/search"
          className="form__goBtn"
          type="submit"
          onClick={e => props.onGo(e, props.locationName, props.locations)}
        >
          Go
        </Link>
        <Link to="/" className="form__locBtn">
          My&#160;location
        </Link>
      </div>
    </form>
  </div>
);

export default SearchForm;
