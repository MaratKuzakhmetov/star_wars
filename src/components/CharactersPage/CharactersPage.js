import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CharactersPage.css';
import { getCharactersThunk } from '../../redux/actions/characters';
import CharactersList from '../CharactersList/CharactersList';
import Loader from '../Loader/Loader';

function CharactersPage() {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characters.length) {
      for (let i = 1; i <= 9; i += 1) {
        dispatch(getCharactersThunk(i));
      }
    }
  }, []);

  console.log('characters', characters);

  return (
    <div className="characters">
      {characters.length !== 82
        ? <Loader />
        : <CharactersList />}
    </div>
  );
}

export default CharactersPage;
