import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import SearchProperty from './components/searchProperty/SearchProperty';
import PropertyList from './components/propertyList/PropertyList';
import Favorites from './components/favorites/Favorites';
import { store } from './store';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact component={SearchProperty} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/locations/:locationName" component={PropertyList} />
        <Route
          path="/locations/locationName/:properties?page=number"
          component={PropertyList}
        />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
