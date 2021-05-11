export interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: null | string;
  totalResults: number;
  currentPage: number;
  selectedProperty: Property;
}

export enum PropertyActionTypes {
  FETCH_PROPERTIES = 'FETCH_PROPERTIES',
  FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS',
  FETCH_PROPERTIES_ERROR = 'FETCH_PROPERTIES_ERROR',
  PAGE_CHANGE = 'PAGE_CHANGE',
  SELECT_PROPERTY = 'SELECT_PROPERTY',
}

interface Property {
  id: string;
  title: string;
  imgUrl: string;
  price: string;
  priceCurrency: string;
  bathroomNumber: number;
  bedroomNumber: number;
  summary: string;
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
  payload: { properties: Property[]; totalResults: number };
}

interface FetchPropertiesErrorAction {
  type: PropertyActionTypes.FETCH_PROPERTIES_ERROR;
  payload: string;
}

interface PageChange {
  type: PropertyActionTypes.PAGE_CHANGE;
  payload: number;
}

interface SelectProperty {
  type: PropertyActionTypes.SELECT_PROPERTY;
  payload: string;
}

export type PropertyAction =
  | FetchPropertiesAction
  | FetchPropertiesSuccessAction
  | FetchPropertiesErrorAction
  | PageChange
  | SelectProperty;
