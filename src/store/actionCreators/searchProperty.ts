import { Location } from '../../types/location';
import { SearchPropertyActionTypes } from '../../types/searchProperty';

export const onInputChanged = (dispatch, { target }) => {
  dispatch({
    type: SearchPropertyActionTypes.INPUT_CHANGED,
    payload: target.value,
  });
};

export const onShowLocations = (dispatch, e, locName, locations) => {
  const isExist: Location = locations.find(
    loc => loc.name.toLowerCase() === locName.toLowerCase()
  );

  isExist
    ? dispatch({
        type: SearchPropertyActionTypes.SELECT_LOCATION,
        payload: isExist.id,
      })
    : e.preventDefault();

  dispatch({
    type: SearchPropertyActionTypes.SHOW_LOCATIONS,
    payload: true,
  });
};
