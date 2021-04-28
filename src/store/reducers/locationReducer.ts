import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from '../../types/location';

const initialState: LocationState = {
  locations: [],
  loading: true,
  error: null,
};

export const locationReducer = (
  state = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case LocationActionTypes.FETCH_LOCATIONS:
      return { locations: [], loading: true, error: null };
    case LocationActionTypes.FETCH_LOCATIONS_SUCCESS:
      return { locations: action.payload, loading: false, error: null };
    case LocationActionTypes.FETCH_LOCATIONS_ERROR:
      return { locations: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
