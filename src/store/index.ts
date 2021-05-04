import { applyMiddleware, createStore } from 'redux';

import { thunkMiddleware } from './middleware/thunkMiddleware';
import { rootReducer } from './reducers/combineReducer';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
