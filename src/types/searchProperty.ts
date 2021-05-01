import { Location } from './location';

export enum SearchPropertyActionTypes {
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
  INPUT_CHANGED = 'INPUT_CHANGED',
  SELECT_LOCATION = 'SELECT_LOCATION',
}

export interface SearchPropertyState {
  inputValue: string;
  showLocations: boolean;
  locations: Location[];
  selectedLocation: Location;
}

interface SearchShowLocation {
  type: SearchPropertyActionTypes.SHOW_LOCATIONS;
  payload: boolean;
}

interface SearchInputChanged {
  type: SearchPropertyActionTypes.INPUT_CHANGED;
  payload: string;
}

interface SearchSelectLocation {
  type: SearchPropertyActionTypes.SELECT_LOCATION;
  payload: Location;
}

export type SearchPropertyAction =
  | SearchShowLocation
  | SearchInputChanged
  | SearchSelectLocation;
