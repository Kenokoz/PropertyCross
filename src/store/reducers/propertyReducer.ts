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
  pageSize: 10,
  selectedProperty: {
    id: '',
    title: '',
    imgUrl: '',
    price: '',
    priceCurrency: '',
    bedroomNumber: 0,
    bathroomNumber: 0,
    summary: '',
  },
  favorites: [],
};

export const propertyReducer = (
  state = initialState,
  action: PropertyAction
): PropertyState => {
  switch (action.type) {
    case PropertyActionTypes.FETCH_PROPERTIES:
      return { ...state, properties: [], loading: true, error: null };
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
      return { ...state, currentPage: action.payload };
    case PropertyActionTypes.SELECT_PROPERTY: {
      return { ...state, selectedProperty: action.payload };
    }
    case PropertyActionTypes.TOGGLE_FAVORITE:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
