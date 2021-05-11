import { PropertyAction, PropertyActionTypes } from '../../types/property';

export const getProperties = (
  locId: string,
  currentPage: number
): PropertyAction => ({
  type: PropertyActionTypes.FETCH_PROPERTIES,
  payload: {
    url: `/locations/${locId}/properties?page=${currentPage}`,
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
