import React from 'react';
import PropTypes from 'prop-types';
import './PopupWithForm.css';

function PopupWithForm({ onClose, children }) {
  function handleOnClose() {
    onClose();
  }

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      handleOnClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <section className="popup" onClick={handleOnClose}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={handleOnClose} />
        {children}
      </div>
    </section>
  );
}

PopupWithForm.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default PopupWithForm;
