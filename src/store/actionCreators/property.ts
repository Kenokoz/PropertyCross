import { Location } from '../../types/location';
import { PropertyAction, PropertyActionTypes } from '../../types/property';

export const getProperties = (location: Location): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES,
  payload: {
    location,
    getData: getDataSucces,
    getDataError: getPropertiesError,
  },
});

const getDataSucces = (data): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS,
  payload: data.properties,
});

const getPropertiesError = (error): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_ERROR,
  payload: `${error}`,
});
