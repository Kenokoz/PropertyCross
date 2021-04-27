import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__label">PropertyCross</div>
      <div className="header__fav">Favorites</div>
    </header>
  );
};

export default Header;
