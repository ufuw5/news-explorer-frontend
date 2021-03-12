import React from 'react';
import './NewsCard.css';
import imgCard from '../../images/card.jpg';

function NewsCard() {
  const title = 'Лесные огоньки: история одной фотографии';

  return (
    <div className="news-card">
      <img className="news-card__image" src={imgCard} alt={title} />
      <div className="news-card__menu">
        <p className="news-card__keyword">Природа</p>
        <p className="news-card__action-hint">Убрать из сохранённых</p>
        <button className="news-card__action-button" />
      </div>
      <p className="news-card__date">2 августа, 2019</p>
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__subtitle">
        Фотограф отвлеклась от освещения
        суровой политической реальности Мексики
        , чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы.
        Фотограф отвлеклась от освещения
        суровой политической реальности Мексики
        , чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы.
      </p>
      <p className="news-card__origin">Афиша</p>
    </div>
  );
}

export default NewsCard;
