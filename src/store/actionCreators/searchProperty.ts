import { SearchPropertyActionTypes } from '../../types/searchProperty';

export const onInputChanged = dispatch => {
  dispatch({
    type: SearchPropertyActionTypes.INPUT_CHANGED,
    payload: dispatch.target.value,
  });
};
