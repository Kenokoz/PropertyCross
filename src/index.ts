import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchProperty from './components/searchProperty/SearchProperty';
import PropertyList from './components/propertyList/PropertyList';
import Favorites from './components/favorites/Favorites';
import './index.css';

ReactDOM.render(
  <Router>
    <div className="container">
      <Route path="/" exact component={SearchProperty} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/search" component={PropertyList} />
      <Route path="/location" component={() => <h1>Location!</h1>} />
      <Route path="/search/:id" component={() => <h1>Recent search!</h1>} />
    </div>
  </Router>,
  document.getElementById('root')
);
