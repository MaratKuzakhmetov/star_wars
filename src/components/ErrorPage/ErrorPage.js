import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__container__text">
          404
        </h1>
        <img src="/img/svg/planet.svg" alt="planet" className="error__container__image-img" />
        <div className="error__container__btn">
          <Link to="/">
            <button type="button" className="error__container__btn-btn">
              Return
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
