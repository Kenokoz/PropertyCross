export interface PropertyState {
  properties: any[];
  loading: boolean;
  error: null | string;
}

export enum PropertyActionTypes {
  FETCH_PROPERTIES = 'FETCH_PROPERTIES',
  FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS',
  FETCH_PROPERTIES_ERROR = 'FETCH_PROPERTIES_ERROR',
}

interface FetchPropertiesAction {
  type: PropertyActionTypes.FETCH_PROPERTIES;
}

interface FetchPropertiesSuccessAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS;
  payload: any[];
}

interface FetchPropertiesErrorAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_ERROR;
  payload: string;
}

export type PropertyAction =
  | FetchPropertiesAction
  | FetchPropertiesSuccessAction
  | FetchPropertiesErrorAction;
