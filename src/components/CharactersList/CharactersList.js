/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharactersList.css';

const filterData = (filterValue, characters) => {
  if (!filterValue) {
    return characters;
  }
  return characters.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()));
};

function CharactersList() {
  const [filterValue, setFilterValue] = useState('');
  const [slicedCharacters, setSlicedCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [slicedFilteredCharacters, setSlicedFilteredCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterValue) {
      setSlicedFilteredCharacters(filteredCharacters.slice((page - 1) * 9, page * 9));
    }
    if (characters.length === 82) {
      setSlicedCharacters(characters.slice((page - 1) * 9, page * 9));
    }
  }, [filteredCharacters, characters.length, page]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredData = filterData(filterValue, characters);
      setFilteredCharacters(filteredData);
    }, 500);

    return () => clearTimeout(Debounce);
  }, [filterValue, page]);

  const handleSearch = (event) => {
    const searchedValue = event.target.value;
    setFilterValue(searchedValue);
  };

  useEffect(() => {
    const totalPages = filterValue ? Math.ceil(filteredCharacters.length / 9) : Math.ceil(characters.length / 9);
    const pagesQty = [];
    setPages(pagesQty);
    for (let i = 0; i < totalPages; i += 1) {
      pagesQty.push(i + 1);
    }
    setPages(pagesQty);
  }, [filteredCharacters.length]);

  return (
    <div className="characters__wrapper">
      <div>
        <h1 className="characters__title">
          {characters.length}
          {' '}
          Peoples for you to choose your favorite
        </h1>
        <input type="text" className="characters__input" placeholder="find..." value={filterValue} onChange={(e) => handleSearch(e)} />
      </div>

      <div className="characters__list">
        {filterValue.length === 0
          ? slicedCharacters.map((item, index) => <CharacterItem key={index * Math.random() * 100} item={item} />)
          : slicedFilteredCharacters.map((item, index) => <CharacterItem key={index * Math.random() * 100} item={item} />)}
      </div>

      <div className="characters__pages">
        {pages.map((item, index) => (
          <div
            className={item === page
              ? 'characters__pages-page big'
              : item === page - 1
                ? 'characters__pages-page medium'
                : item === page + 1
                  ? 'characters__pages-page medium'
                  : 'characters__pages-page small'}
            key={index * Math.random() * 100}
            onClick={(e) => setPage(item)}
          />
        ))}
      </div>

      <div className="characters-btn-wrapper">
        <div className="characters__button" onClick={(e) => setPage((prev) => prev + 1)}>
          <img src="./img/svg/button.svg" alt="button" />
        </div>
      </div>

    </div>
  );
}

export default CharactersList;
