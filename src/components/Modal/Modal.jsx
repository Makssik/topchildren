import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal__backdrop"
      onClick={onClose}
    >
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
    </motion.div>
  );
};

export default Modal;
