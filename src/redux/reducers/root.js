import { combineReducers } from 'redux';
import charactersReducer from './characters';
import modalActiveReducer from './modalActive';

const rootReducer = combineReducers({
  characters: charactersReducer,
  modalActive: modalActiveReducer,
});

export default rootReducer;
