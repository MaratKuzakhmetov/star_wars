import {
  GET_CHARACTERS,
} from '../constants/constants';

const initialState = [];

const charactersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
      return [...state, ...payload];
    // case CREATE_TASK:
    //   return [...state, payload];
    // case DELETE_TASK:
    //   return state.filter((task) => task.id !== payload);
    // case UPDATE_TASK:
    //   return state.map((task) => (task.id === payload.id ? payload : task));
    // case CHANGE_STATUS_TASK:
    //   return state.map((task) => (task.id === payload.id ? payload : task));
    default:
      return state;
  }
};

export default charactersReducer;
