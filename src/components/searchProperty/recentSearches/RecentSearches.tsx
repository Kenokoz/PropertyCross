import React from 'react';
import { Link } from 'react-router-dom';

import './RecentSearches.scss';
import { usedTypedSelector } from '../../../hooks/useTypedSelector';
import { RootState } from '../../../store/reducers/combineReducer';
import { Location } from '../../../types/location';

interface RecentSearchesProps {
  onClicked(location: Location): void;
}

const RecentSearches: React.FC<RecentSearchesProps> = ({ onClicked }) => {
  const { recentSearches } = usedTypedSelector(
    (state: RootState) => state.searchProperty
  );

  return (
    <div className="list">
      <div className="list__title">Recent searches:</div>
      <div className="list__wrapper">
        {recentSearches.map(({ name, id }) => (
          <Link
            key={id}
            className="list__item"
            to={`locations/${id}`}
            onClick={() => onClicked({ name, id })}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RecentSearches;
