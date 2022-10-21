/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './CharacterItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { setModalActive } from '../../redux/actions/modalActive';
import Modal from '../Modal/Modal';

function CharacterItem({ item }) {
  const dispatch = useDispatch();
  const modalActive = useSelector((state) => state.modalActive);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="character__card" onClick={(e) => setIsOpen(true)}>

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
      <div>
        <Modal shown={isOpen} close={(e) => setIsOpen(false)} item={item} />
      </div>
    </>
  );
}

export default CharacterItem;
