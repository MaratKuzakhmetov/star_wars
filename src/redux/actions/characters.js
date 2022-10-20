import {
  GET_CHARACTERS,
} from '../constants/constants';

export const getCharacters = (data) => ({ type: GET_CHARACTERS, payload: data });

export const getCharactersThunk = (page) => async (dispatch) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const result = await response.json();
  dispatch(getCharacters(result.results));
};
