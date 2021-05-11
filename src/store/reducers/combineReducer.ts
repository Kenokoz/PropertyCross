import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { propertyReducer } from './propertyReducer';
import { searchPropertyReducer } from './searchPropertyReducer';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['property', 'searchProperty'],
};

export const rootReducer = combineReducers({
  property: propertyReducer,
  searchProperty: searchPropertyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
