import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalActive } from '../../redux/actions/modalActive';
import './Modal.css';

function Modal() {
  const dispatch = useDispatch();
  const modalActive = useSelector((state) => state.modalActive);

  return (
    <div className={modalActive ? 'modal active' : 'modal'} onClick={(e) => dispatch(setModalActive(false))}>
      <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Modal;
