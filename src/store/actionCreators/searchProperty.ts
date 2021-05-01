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

const onGetProperties = (location: Location) => ({
  type: SearchPropertyActionTypes.SELECT_LOCATION,
  payload: location.id,
});

export const onShowLocations = (
  e: MouseEvent,
  locName: string,
  locations: Location[]
): SearchPropertyAction => {
  const isExist: Location = locations.find(
    loc => loc.name.toLowerCase() === locName.toLowerCase()
  );

  isExist ? onGetProperties(isExist) : e.preventDefault();

  return {
    type: SearchPropertyActionTypes.SHOW_LOCATIONS,
    payload: true,
  };
};
