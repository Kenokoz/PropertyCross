import {
  PropertyAction,
  PropertyActionTypes,
  PropertyState,
} from '../../types/property';

const initialState: PropertyState = {
  properties: [],
  loading: true,
  error: null,
};

export const propertyReducer = (
  state = initialState,
  action: PropertyAction
): PropertyState => {
  switch (action.type) {
    case PropertyActionTypes.FETCH_PROPERTIES:
      return { properties: [], loading: true, error: null };
    case PropertyActionTypes.FETCH_PROPERTIES_SUCCESS:
      return { properties: action.payload, loading: false, error: null };
    case PropertyActionTypes.FETCH_PROPERTIES_ERROR:
      return { properties: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
