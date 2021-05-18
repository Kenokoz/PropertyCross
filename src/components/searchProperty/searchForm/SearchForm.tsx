import React, { ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { Location } from '../../../types/location';
import './SearchForm.scss';

interface SearchFormProps {
  onGo: (
    e: FormEvent,
    locations: Location[],
    inputLocationName: string,
    history
  ) => void;
  onInputChanged(e: ChangeEvent): void;
  inputLocationName: string;
  locations: Location[];
}

const SearchForm: React.FC<SearchFormProps> = ({
  onInputChanged,
  onGo,
  locations,
  inputLocationName,
}) => {
  const history = useHistory();
  const goClicked = (e: FormEvent) =>
    onGo(e, locations, inputLocationName, history);

  return (
    <div className="search__form">
      <form className="form" onSubmit={goClicked}>
        <div className="form__wrapper">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            onChange={e => onInputChanged(e)}
          />
        </div>
        <div className="form__wrapper">
          <button type="submit" className="form__goBtn">
            Go
          </button>
          <Link to="/mylocation" className="form__locBtn">
            My&#160;location
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
