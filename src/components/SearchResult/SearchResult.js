import React from 'react';
import './SearchResult.css';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResult() {
  return (
    <div className="search-result">
      <h3 className="search-result__title">Результаты поиска</h3>
      {false && <NotFound />}
      {false && <Preloader />}
      <div className="search-result__card-list">
        {true && <NewsCardList />}
      </div>
      <button className="search-result__more-button">Показать еще</button>
    </div>
  );
}

export default SearchResult;
