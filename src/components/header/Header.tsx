import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <Link className="header__label" to="/">
      PropertyCross
    </Link>
    <Link className="header__fav" to="/favorites">
      Favorites
    </Link>
  </header>
);

export default Header;
