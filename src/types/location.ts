export interface LocationState {
  locations: any[];
  loading: boolean;
  error: null | string;
}

export enum LocationActionTypes {
  FETCH_LOCATIONS = 'FETCH_LOCATIONS',
  FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
  FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR',
}

interface FetchLocationsAction {
  type: LocationActionTypes.FETCH_LOCATIONS;
}

interface FetchLocationsSuccessAction {
  type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS;
  payload: any[];
}

interface FetchLocationsErrorAction {
  type: LocationActionTypes.FETCH_LOCATIONS_ERROR;
  payload: string;
}

export type LocationAction =
  | FetchLocationsAction
  | FetchLocationsSuccessAction
  | FetchLocationsErrorAction;
