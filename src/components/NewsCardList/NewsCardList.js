import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <ul className="news-card-list">
      <li className="news-card-list__item">
        <NewsCard />
      </li>
      <li className="news-card-list__item">
        <NewsCard />
      </li>
      <li className="news-card-list__item">
        <NewsCard />
      </li>
      <li className="news-card-list__item">
        <NewsCard />
      </li>
    </ul>
  );
}

export default NewsCardList;
