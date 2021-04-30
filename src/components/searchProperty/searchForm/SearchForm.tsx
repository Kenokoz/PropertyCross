import React from 'react';
import { Link } from 'react-router-dom';
import { Location } from '../../../types/location';

import './SearchForm.scss';

interface SearchFormProps {
  onGo: (e, locName, locations) => void;
  onInputChanged: (e) => void;
  locationName: string;
  locations: Location[];
}

const SearchForm: React.FC<SearchFormProps> = props => {
  const { onInputChanged, onGo, locationName, locations } = props;

  const clickedGo = e => onGo(e, locationName, locations);

  return (
    <div className="search__form">
      <form className="form">
        <div className="form__wrapper">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            onChange={e => onInputChanged(e)}
          />
        </div>
        <div className="form__wrapper">
          <Link
            to="/search"
            className="form__goBtn"
            type="submit"
            onClick={clickedGo}
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
};

export default SearchForm;
