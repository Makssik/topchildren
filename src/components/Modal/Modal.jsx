import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
    }
    
  return ReactDOM.createPortal(
    <div className="modal__backdrop">
      <div className="modal__content">
        <span className="modal__button--close" onClick={onClose}>
          &times;
        </span>
        <iframe
          title="googleForm"
          className="google__form--modal"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf_cqSExqPuFb8sTQ7CU6EEDuPXQThvSyJkoQrWlUlqcQN9Rg/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Загрузка…
        </iframe>
      </div>
    </div>,
    document.getElementById('root'),
  );
};

export default Modal;