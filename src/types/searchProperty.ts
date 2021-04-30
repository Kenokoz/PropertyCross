export enum SearchPropertyActionTypes {
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
  INPUT_CHANGED = 'INPUT_CHANGED',
  SELECT_LOCATION = 'SELECT_LOCATION',
}

export interface SearchPropertyState {
  inputValue: string;
  showLocations: boolean;
  locations: { name: string; id: string }[];
  selectedLocation: string;
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
  payload: string;
}

export type SearchPropertyAction =
  | SearchShowLocation
  | SearchInputChanged
  | SearchSelectLocation;
