import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle" />
      <p className="preloader__title">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
