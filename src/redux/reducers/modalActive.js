import {
  SET_MODAL_ACTIVE,
} from '../constants/constants';

const initialState = false;

const modalActiveReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MODAL_ACTIVE:
      return payload;
    default:
      return state;
  }
};

export default modalActiveReducer;
