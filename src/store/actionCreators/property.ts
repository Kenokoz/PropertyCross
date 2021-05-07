import { PropertyAction, PropertyActionTypes } from '../../types/property';

export const getProperties = (url: string): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES,
  payload: {
    url,
    getData: getDataSucces,
    getDataError: getPropertiesError,
  },
});

const getDataSucces = (data): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS,
  payload: data,
});

const getPropertiesError = (error): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_ERROR,
  payload: `${error}`,
});

export const onPageChange = (page: number): PropertyAction => ({
  type: PropertyActionTypes.PAGE_CHANGE,
  payload: page,
});
