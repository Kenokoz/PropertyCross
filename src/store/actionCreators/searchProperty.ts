import { SearchPropertyActionTypes } from '../../types/searchProperty';

export const onInputChanged = (dispatch, { target }) => {
  dispatch({
    type: SearchPropertyActionTypes.INPUT_CHANGED,
    payload: target.value,
  });
};

export const onShowLocations = (dispatch, e, locName, locations) => {
  const isExist = locations.find(
    loc => loc.name.toLowerCase() === locName.toLowerCase()
  );

  isExist ? null : e.preventDefault();

  dispatch({
    type: SearchPropertyActionTypes.SHOW_LOCATIONS,
    payload: true,
  });
};
