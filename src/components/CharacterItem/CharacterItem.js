/* eslint-disable no-nested-ternary */
import React from 'react';
import './CharacterItem.css';

function CharacterItem({ item }) {
  return (
    <div className="character__card">

      <div className="character__card__information-name">
        {item.name}
      </div>

      <div className="character__card__information-dimensions">
        <div className="character__card__information-dimensions-circles">
          {item.height !== 'unknown' && (
          <div className="character__card__information-dimensions-circle">
            <div className="character__card__information-dimensions-circle-text">
              {Math.round(item.height)}
            </div>
          </div>
          )}
          {item.mass !== 'unknown' && (
          <div className="character__card__information-dimensions-circle">
            <div className="character__card__information-dimensions-circle-text">
              {Math.round(item.mass)}
            </div>
          </div>
          )}
        </div>
        <div className="character__card__information-dimensions-values">
          {item.height !== 'unknown' && (
          <div className="character__card__information-dimensions-value">
            height
          </div>
          )}
          {item.mass !== 'unknown' && (
          <div className="character__card__information-dimensions-value">
            mass
          </div>
          )}
        </div>
      </div>

      <div className="character__card__information-personal">
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
  );
}

export default CharacterItem;
