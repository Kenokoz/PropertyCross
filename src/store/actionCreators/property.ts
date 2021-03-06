import {
  Property,
  PropertyAction,
  PropertyActionTypes,
} from '../../types/property';

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

export const onSelectProperty = (property: Property): PropertyAction => ({
  type: PropertyActionTypes.SELECT_PROPERTY,
  payload: property,
});

export const onToggleFavorite = (
  property: Property,
  favorites: Property[]
): PropertyAction => {
  const isAdded = favorites.find(({ id }) => id === property.id);
  const updatedFaves = isAdded
    ? favorites.filter(({ id }) => id !== isAdded.id)
    : [...favorites, property];
  return {
    type: PropertyActionTypes.TOGGLE_FAVORITE,
    payload: updatedFaves,
  };
};
