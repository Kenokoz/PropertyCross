import { ChangeEvent, FormEvent } from 'react';

import { Location } from '../../types/location';
import {
  SearchPropertyActionTypes,
  SearchPropertyAction,
} from '../../types/searchProperty';

export const onInputChanged = (
  e: ChangeEvent<HTMLInputElement>
): SearchPropertyAction => ({
  type: SearchPropertyActionTypes.INPUT_CHANGED,
  payload: e.target.value,
});

const onGetProperties = (
  e: FormEvent,
  location: Location
): SearchPropertyAction => {
  e.preventDefault();
  return {
    type: SearchPropertyActionTypes.SELECT_LOCATION,
    payload: location,
  };
};
const onShowLocations = (e: FormEvent): SearchPropertyAction => {
  e.preventDefault();
  return {
    type: SearchPropertyActionTypes.SHOW_LOCATIONS,
    payload: true,
  };
};

export const onGoClicked = (
  e: FormEvent,
  locations: Location[],
  inputLocationName: string
): SearchPropertyAction => {
  const isLocationFound: Location = locations.find(
    loc => loc.name.toLowerCase() === inputLocationName.toLowerCase()
  );

  return isLocationFound
    ? onGetProperties(e, isLocationFound)
    : onShowLocations(e);
};

export const onLocationClicked = (
  location: Location
): SearchPropertyAction => ({
  type: SearchPropertyActionTypes.LOCATION_CLICKED,
  payload: location,
});
