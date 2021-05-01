import { ChangeEvent, MouseEvent } from 'react';

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

const onGetProperties = (location: Location): SearchPropertyAction => ({
  type: SearchPropertyActionTypes.SELECT_LOCATION,
  payload: location,
});

const onShowLocations = (e: MouseEvent): SearchPropertyAction => {
  e.preventDefault();
  return {
    type: SearchPropertyActionTypes.SHOW_LOCATIONS,
    payload: true,
  };
};

export const onGoClicked = (
  e: MouseEvent,
  locations: Location[],
  inputLocationName: string
): SearchPropertyAction => {
  const foundLocation: Location = locations.find(
    loc => loc.name.toLowerCase() === inputLocationName.toLowerCase()
  );

  return foundLocation ? onGetProperties(foundLocation) : onShowLocations(e);
};

export const onLocationClicked = (
  location: Location
): SearchPropertyAction => ({
  type: SearchPropertyActionTypes.LOCATION_CLICKED,
  payload: location,
});
