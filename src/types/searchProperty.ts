import { Coordinates } from './coordinates';
import { Location } from './location';

export enum SearchPropertyActionTypes {
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
  INPUT_CHANGED = 'INPUT_CHANGED',
  SELECT_LOCATION = 'SELECT_LOCATION',
  LOCATION_CLICKED = 'LOCATION_CLICKED',
  CLEAR_INPUT_VALUE = 'CLEAR_INPUT_VALUE',
  RESET_SHOW_LOCATIONS = 'RESET_SHOW_LOCATIONS',
  GET_MY_LOCATION = 'GET_MY_LOCATION',
}

export interface SearchPropertyState {
  inputValue: string;
  showLocations: boolean;
  locations: Location[];
  selectedLocation: Location;
  recentSearches: Location[];
  myLocation: Coordinates;
}

interface ShowLocation {
  type: SearchPropertyActionTypes.SHOW_LOCATIONS;
  payload: boolean;
}

interface InputChanged {
  type: SearchPropertyActionTypes.INPUT_CHANGED;
  payload: string;
}

interface SelectLocation {
  type: SearchPropertyActionTypes.SELECT_LOCATION;
  payload: Location;
}

interface LocationClicked {
  type: SearchPropertyActionTypes.LOCATION_CLICKED;
  payload: Location;
}

interface ClearInputValue {
  type: SearchPropertyActionTypes.CLEAR_INPUT_VALUE;
}

interface ResetShowLocations {
  type: SearchPropertyActionTypes.RESET_SHOW_LOCATIONS;
}

interface GetMyLocation {
  type: SearchPropertyActionTypes.GET_MY_LOCATION;
  payload: Coordinates;
}

export type SearchPropertyAction =
  | ShowLocation
  | InputChanged
  | SelectLocation
  | LocationClicked
  | ClearInputValue
  | ResetShowLocations
  | GetMyLocation;
