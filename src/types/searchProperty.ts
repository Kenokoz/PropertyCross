export enum PropertyActionTypes {
  CHANGED_INPUT = 'CHANGED_INPUT',
  SHOW_LOCATIONS = 'SHOW_LOCATIONS',
}

export interface SearchPropertyState {
  inputValue: string;
}

export type SearchPropertyAction = {
  type: PropertyActionTypes.CHANGED_INPUT;
  payload: string;
};
