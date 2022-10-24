/* eslint-disable no-nested-ternary */
import React from 'react';
import './ModalCharacter.css';

function ModalCharacter({ item }) {
  return (
    <div className="modal__wrapper">
      <div className="modal__wrapper__info">
        <div className="modal__wrapper__info-pic">
          <img className="modal-img" src={(item.gender !== 'n/a' && item.gender !== 'none') ? `./img/svg/${item.gender}.png` : './img/svg/robot.png'} alt="gender_image" />
        </div>
        <div className="modal__wrapper__info-data">
          {(item.gender !== 'n/a' && item.gender !== 'none') && (
          <div className={item.gender === 'male'
            ? 'character__card__information-personal-sex male'
            : item.gender === 'female'
              ? 'character__card__information-personal-sex female'
              : 'character__card__information-personal-sex other'}
          >
            {item.gender}
          </div>
          ) }
          {item.birth_year !== 'unknown' && (
          <div className="character__card__information-personal-birthdate">
            {item.birth_year}
          </div>
          )}
        </div>
      </div>
      <div className="modal__wrapper__data">
        <div className="modal__wrapper__data-name">
          {item.name}
        </div>
        <div className="modal__wrapper__data-info">
          <p>
            hair color:
            {' '}
            {item.hair_color}
          </p>
          <p>
            skin color:
            {' '}
            {item.skin_color}
          </p>
          <p>
            eye color:
            {' '}
            {item.eye_color}
          </p>
        </div>
        <div className="modal__wrapper__data-dimensions">
          {item.height !== 'unknown' && (
          <div className="modal__wrapper__data-dimensions-size">
            <div className="modal__wrapper__data-dimensions-size-circle">
              <div className="modal-height-circle-text">
                {Math.round(item.height)}
              </div>
            </div>
            <div className="modal-value">
              <div className="modal-value-text">
                height
              </div>
            </div>
          </div>
          )}
          {item.mass !== 'unknown' && (
          <div className="modal__wrapper__data-dimensions-size">
            <div className="modal__wrapper__data-dimensions-size-circle">
              <div className="modal-weight-circle-text">
                {Math.round(item.mass)}
              </div>
            </div>
            <div className="modal-value">
              <div className="modal-value-text">
                mass
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalCharacter;
