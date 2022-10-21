import {
  GET_CHARACTERS, GET_FILTERED_CHARACTERS,
} from '../constants/constants';

const initialState = [];

const charactersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
      return [...state, ...payload];
    case GET_FILTERED_CHARACTERS:
      return state.filter((item) => item.name.includes(payload));
    default:
      return state;
  }
};

export default charactersReducer;
