import {
  PropertyAction,
  PropertyActionTypes,
  PropertyState,
} from '../../types/property';

const initialState: PropertyState = {
  properties: [],
  loading: true,
  error: null,
  totalResults: 0,
  currentPage: 1,
};

export const propertyReducer = (
  state = initialState,
  action: PropertyAction
): PropertyState => {
  switch (action.type) {
    case PropertyActionTypes.FETCH_PROPERTIES:
      return { ...state };
    case PropertyActionTypes.FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        properties: action.payload.properties,
        loading: false,
        totalResults: action.payload.totalResults,
      };
    case PropertyActionTypes.FETCH_PROPERTIES_ERROR:
      return { ...state, error: action.payload };
    case PropertyActionTypes.PAGE_CHANGE:
      console.log(action.payload);
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
