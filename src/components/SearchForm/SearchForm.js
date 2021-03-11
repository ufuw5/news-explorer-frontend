import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <input
        className="search-form__input"
        type="text"
        placeholder="Введите тему новости"
        required />
      <button className="search-form__submit">Искать</button>
    </form>
  );
}

export default SearchForm;
