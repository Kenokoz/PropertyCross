export enum SearchPropertyActionTypes {
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
}

export interface SearchPropertyState {
  inputValue: string;
  showLocations: boolean;
  locations: any[];
}

export type SearchPropertyAction = {
  type: SearchPropertyActionTypes.SHOW_LOCATIONS;
  payload: boolean;
};
