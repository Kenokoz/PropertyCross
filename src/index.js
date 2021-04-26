import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';

const App = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
