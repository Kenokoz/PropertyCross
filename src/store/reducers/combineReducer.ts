import { combineReducers } from 'redux';

import { propertyReducer } from './propertyReducer';
import { searchPropertyReducer } from './searchPropertyReducer';

export const rootReducer = combineReducers({
  property: propertyReducer,
  searchProperty: searchPropertyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
