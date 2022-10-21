import React from 'react';
import ModalCharacter from '../ModalCharacter/ModalCharacter';
import './Modal.css';

function Modal({ item, shown, close }) {
  return shown ? (
    <div className="modal-backdrop" onClick={(e) => close()}>
      <div className="modal__btn">
        <div className="modal__btn-close" onClick={(e) => close()}>
          <img src="./img/svg/close.svg" alt="close-icon" className="btn-image" />
        </div>
      </div>
      <div className="modal-content" onClick={(e) => { e.stopPropagation(); }}>
        <ModalCharacter item={item} />
      </div>
    </div>
  ) : null;
}

export default Modal;
