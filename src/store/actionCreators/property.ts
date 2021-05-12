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

export const onSelectProperty = (propId: string): PropertyAction => ({
  type: PropertyActionTypes.SELECT_PROPERTY,
  payload: propId,
});

export const onToggleFavorite = (propId: string): PropertyAction => ({
  type: PropertyActionTypes.TOGGLE_FAVORITE,
  payload: propId,
});
