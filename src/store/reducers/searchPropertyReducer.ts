import {
  SearchPropertyAction,
  SearchPropertyState,
  SearchPropertyActionTypes,
} from '../../types/searchProperty';
import { Location } from '../../types/location';

const initialState: SearchPropertyState = {
  inputValue: '',
  showLocations: false,
  locations: [
    { name: 'Albury, Guildford', id: 'albury_guildford', count: 0 },
    { name: 'Albury, Newbury', id: 'albury_newbury', count: 0 },
    { name: 'Albury, Ware', id: 'albury_ware', count: 0 },
    { name: 'Shifnal', id: 'shifnal', count: 0 },
  ],
  selectedLocation: { name: '', id: '', count: 0 },
  recentSearches: [{ name: 'Albury, Ware', id: 'albury_ware', count: 1 }],
  myLocation: { latitude: 0, longitude: 0 },
};

export const searchPropertyReducer = (
  state = initialState,
  action: SearchPropertyAction
): SearchPropertyState => {
  switch (action.type) {
    case SearchPropertyActionTypes.SHOW_LOCATIONS:
      return { ...state, showLocations: action.payload };
    case SearchPropertyActionTypes.INPUT_CHANGED:
      return { ...state, inputValue: action.payload };
    case SearchPropertyActionTypes.SELECT_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
        recentSearches: filterRecentSearches(state, action.payload),
      };
    case SearchPropertyActionTypes.LOCATION_CLICKED:
      return {
        ...state,
        selectedLocation: action.payload,
        recentSearches: filterRecentSearches(state, action.payload),
      };
    case SearchPropertyActionTypes.CLEAR_INPUT_VALUE:
      return { ...state, inputValue: '' };
    case SearchPropertyActionTypes.RESET_SHOW_LOCATIONS: {
      return { ...state, showLocations: false };
    }
    case SearchPropertyActionTypes.GET_MY_LOCATION:
      return { ...state, myLocation: action.payload };
    default:
      return state;
  }
};

function filterRecentSearches(state: SearchPropertyState, location: Location) {
  const oldSearches = [...state.recentSearches];
  const existSearch = oldSearches.find(item => {
    if (item.id === location.id) {
      item.count += 1;
      return item;
    }
  });
  if (existSearch) {
    return oldSearches;
  } else {
    location.count += 1;
    return [...oldSearches, { ...location }];
  }
}
