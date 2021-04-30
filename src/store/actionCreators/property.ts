import { Dispatch } from 'react';

import { PropertyAction, PropertyActionTypes } from '../../types/property';

export const fetchProperties = locationName => {
  return async (dispatch: Dispatch<PropertyAction>) => {
    try {
      dispatch({ type: PropertyActionTypes.FETCH_PROPERTIES });
      const response = await fetch(
        `http://localhost:3000/locations/${locationName}/properties?page=1`
      ).then(data => data.json());
      dispatch({
        type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS,
        payload: response.properties,
      });
    } catch (error) {
      dispatch({
        type: PropertyActionTypes.FETCH_PROPERTIES_ERROR,
        payload: 'Error!',
      });
    }
  };
};
