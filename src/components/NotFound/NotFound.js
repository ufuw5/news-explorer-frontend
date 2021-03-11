import React from 'react';
import './NotFound.css';
import iconNotFound from '../../images/notFound.svg';

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__img" src={iconNotFound} alt="Иконка не найдено" />
      <h3 className="not-found__title">Ничего не найдено</h3>
      <p className="not-found__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default NotFound;
