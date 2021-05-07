import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';

import { thunkMiddleware } from './middleware/thunkMiddleware';
import rootReducer from './reducers/combineReducer';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store);

export default { store, persistor };
