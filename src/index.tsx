import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import './assets/styles/index.scss';
import SearchProperty from './components/searchProperty/SearchProperty';
import PropertyList from './components/propertyList/PropertyList';
import Favorites from './components/favorites/Favorites';
import { store } from './store';
import { RootState } from './store/reducers/combineReducer';

const App = () => {
  const {
    selectedLocation: { id },
  } = useSelector((state: RootState) => state.searchProperty);

  // TODO: сделать кнопку назад useHistory()
  const pathToLocation = id ? `/locations/${id}` : '';

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() =>
          pathToLocation ? <Redirect to={pathToLocation} /> : <SearchProperty />
        }
      />
      <Route path="/favorites" component={Favorites} />
      <Route path={`/locations/:locationName`} component={PropertyList} />
      <Route path="/search/:id" component={() => <h1>Recent search!</h1>} />
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
