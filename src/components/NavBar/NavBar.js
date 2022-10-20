import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const path = useLocation();

  return (
    <header className="header">
      <div className="wrapper">

        <div className="header__wrapper">
          <div className="header__logo">
            <img src="./img/svg/star_wars_logo.svg" alt="star_wars_logo" className="header__logo-pic" />
          </div>
        </div>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/" className={path.pathname === '/' ? 'header__link active' : 'header__link'}>Home</Link>
            </li>
            <li className="header__item">
              <Link to="/characters" className={path.pathname === '/characters' ? 'header__link active' : 'header__link'}>Characters</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default NavBar;
