export enum SearchPropertyActionTypes {
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
  INPUT_CHANGED = 'INPUT_CHANGED',
}

export interface SearchPropertyState {
  inputValue: string;
  showLocations: boolean;
  locations: any[];
}

interface SearchShowLocation {
  type: SearchPropertyActionTypes.SHOW_LOCATIONS;
  payload: boolean;
}

interface SearchInputChanged {
  type: SearchPropertyActionTypes.INPUT_CHANGED;
  payload: string;
}

export type SearchPropertyAction = SearchShowLocation | SearchInputChanged;
