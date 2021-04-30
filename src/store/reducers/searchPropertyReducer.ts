import {
  SearchPropertyAction,
  SearchPropertyState,
  SearchPropertyActionTypes,
} from '../../types/searchProperty';

const initialState: SearchPropertyState = {
  inputValue: '',
  showLocations: false,
  locations: [
    { name: 'Albury, Guildford', id: 'albury_guildford' },
    { name: 'Albury, Newbury', id: 'albury_newbury' },
    { name: 'Albury, Ware', id: 'albury_ware' },
    { name: 'Shifnal', id: 'shifnal' },
  ],
  selectedLocation: '',
};

export const searchPropertyReducer = (
  state = initialState,
  action: SearchPropertyAction
): SearchPropertyState => {
  switch (action.type) {
    case SearchPropertyActionTypes.SHOW_LOCATIONS:
      return {
        ...state,
        showLocations: action.payload,
      };
    case SearchPropertyActionTypes.INPUT_CHANGED:
      return {
        ...state,
        inputValue: action.payload,
      };
    case SearchPropertyActionTypes.SELECT_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
      };
    default:
      return state;
  }
};
