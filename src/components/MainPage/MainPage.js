import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main">

      <div className="main__intro">
        <h1 className="main__intro__title">
          Find all your
          favorite character
        </h1>
        <h2 className="main__intro__subtitle">
          You can find out all the information about your favorite characters
        </h2>
        <Link to="/characters" className="link">
          <button type="button" className="main__intro__btn">
            See more...
          </button>
        </Link>
      </div>

      <div className="main__images">
        <img src="./img/svg/full.svg" alt="yoda" className="yoda" />
      </div>

    </div>
  );
}

export default MainPage;
