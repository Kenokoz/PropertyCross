import { Location } from './location';

export enum SearchPropertyActionTypes {
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
  INPUT_CHANGED = 'INPUT_CHANGED',
  SELECT_LOCATION = 'SELECT_LOCATION',
  LOCATION_CLICKED = 'LOCATION_CLICKED',
  CLEAR_SELECTED_LOCATION = 'CLEAR_SELECTED_LOCATION',
}

export interface SearchPropertyState {
  inputValue: string;
  showLocations: boolean;
  locations: Location[];
  selectedLocation: Location;
  recentSearches: Location[];
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

interface SearchLocationClicked {
  type: SearchPropertyActionTypes.LOCATION_CLICKED;
  payload: Location;
}

interface SearchClearSelectedLocations {
  type: SearchPropertyActionTypes.CLEAR_SELECTED_LOCATION;
}

export type SearchPropertyAction =
  | SearchShowLocation
  | SearchInputChanged
  | SearchSelectLocation
  | SearchLocationClicked
  | SearchClearSelectedLocations;
