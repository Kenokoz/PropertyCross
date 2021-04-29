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
    default:
      return state;
  }
};
