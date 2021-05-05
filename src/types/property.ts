export interface PropertyState {
  properties: any[];
  loading: boolean;
  error: null | string;
  totalResults: number;
}

export enum PropertyActionTypes {
  FETCH_PROPERTIES = 'FETCH_PROPERTIES',
  FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS',
  FETCH_PROPERTIES_ERROR = 'FETCH_PROPERTIES_ERROR',
}

export interface Request {
  url: string;
  getData(data): PropertyAction;
  getDataError(error): PropertyAction;
}

interface FetchPropertiesAction {
  type: PropertyActionTypes.FETCH_PROPERTIES;
  payload: Request;
}

interface FetchPropertiesSuccessAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS;
  payload: { properties: any[]; totalResults: number };
}

interface FetchPropertiesErrorAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_ERROR;
  payload: string;
}

export type PropertyAction =
  | FetchPropertiesAction
  | FetchPropertiesSuccessAction
  | FetchPropertiesErrorAction;
