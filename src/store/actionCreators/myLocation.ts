import { Dispatch } from 'react';

import { Coordinates } from '../../types/coordinates';
import {
  SearchPropertyAction,
  SearchPropertyActionTypes,
} from '../../types/searchProperty';

export const getMyLocation =
  () => async (dispatch: Dispatch<SearchPropertyAction>) => {
    const getCoordinates = ({ coords: { latitude, longitude } }) => {
      const coordinates: Coordinates = {
        latitude,
        longitude,
      };

      dispatch({
        type: SearchPropertyActionTypes.GET_MY_LOCATION,
        payload: coordinates,
      });
    };
    navigator.geolocation.getCurrentPosition(getCoordinates);
  };
