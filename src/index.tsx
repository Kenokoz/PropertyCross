import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './assets/styles/index.scss';
import SearchProperty from './components/searchProperty/SearchProperty';
import PropertyList from './components/propertyList/PropertyList';
import Favorites from './components/favorites/Favorites';
import { store, persistor } from './store';
import Header from './components/header/Header';
import PropertyInfo from './components/propertyInfo/propertyInfo';
import MyLocation from './components/myLocation/MyLocation';

const App = () => (
  <div className="container">
    <Header />
    <Route path="/" exact component={SearchProperty} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/locations/:locationName" exact component={PropertyList} />
    <Route path="/locations/:locationName/:id" exact component={PropertyInfo} />
    <Route path="/mylocation" component={MyLocation} />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);
