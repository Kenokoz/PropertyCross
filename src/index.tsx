import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import SearchProperty from './components/searchProperty/SearchProperty';
import PropertyList from './components/propertyList/PropertyList';
import Favorites from './components/favorites/Favorites';
import { store } from './store';

const App = () => (
  <Router>
    <Route path="/" exact component={SearchProperty} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/locations/:locationName" component={PropertyList} />
    <Route path="/location" component={() => <h1>Location!</h1>} />
    <Route path="/search/:id" component={() => <h1>Recent search!</h1>} />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
