import {
  SearchPropertyAction,
  SearchPropertyState,
  CHANGED_INPUT,
} from '../../types/searchProperty';

const initialState: SearchPropertyState = {
  inputValue: '',
};

export const searchPropertyReducer = (
  state = initialState,
  action: SearchPropertyAction
): SearchPropertyState => {
  switch (action.type) {
    case CHANGED_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};
