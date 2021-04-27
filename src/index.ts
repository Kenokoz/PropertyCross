import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header';
import SearchProperty from './components/searchProperty/SearchProperty';
import './index.css';

ReactDOM.render(
  <div className="container">
    <Header />
    <SearchProperty />
  </div>,
  document.getElementById('root')
);
