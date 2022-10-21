import {
  GET_CHARACTERS,
} from '../constants/constants';

const initialState = [];

const charactersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default charactersReducer;
