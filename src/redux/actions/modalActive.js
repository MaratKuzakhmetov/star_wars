/* eslint-disable import/prefer-default-export */
import {
  SET_MODAL_ACTIVE,
} from '../constants/constants';

export const setModalActive = (data) => ({ type: SET_MODAL_ACTIVE, payload: data });
