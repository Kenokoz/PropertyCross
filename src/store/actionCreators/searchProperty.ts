import { Location } from '../../types/location';
import { SearchPropertyActionTypes } from '../../types/searchProperty';

export const onInputChanged = ({ target }) => {
  return {
    type: SearchPropertyActionTypes.INPUT_CHANGED,
    payload: target.value,
  };
};

const onGetProperties = (location: Location) => {
  return {
    type: SearchPropertyActionTypes.SELECT_LOCATION,
    payload: location.id,
  };
};

export const onShowLocations = (e, locName, locations) => {
  const isExist: Location = locations.find(
    loc => loc.name.toLowerCase() === locName.toLowerCase()
  );

  isExist ? onGetProperties(isExist) : e.preventDefault();

  return {
    type: SearchPropertyActionTypes.SHOW_LOCATIONS,
    payload: true,
  };
};
