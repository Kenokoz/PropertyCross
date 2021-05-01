import { Location } from './location';

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

export interface Request {
  location: Location;
  getData(data): PropertyAction;
  getDataError(error): PropertyAction;
}

interface FetchPropertiesAction {
  type: PropertyActionTypes.FETCH_PROPERTIES;
  request: Request;
}

interface FetchPropertiesSuccessAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS;
  payload: Location[];
}

interface FetchPropertiesErrorAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_ERROR;
  payload: string;
}

export type PropertyAction =
  | FetchPropertiesAction
  | FetchPropertiesSuccessAction
  | FetchPropertiesErrorAction;
