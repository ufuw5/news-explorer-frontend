import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';

function SavedNews() {
  function handleOpenSigninForm() { }

  function handleVerticalScrollLock() {}

  return (
    <main className="saved-news">
      <Header
        onAuth={handleOpenSigninForm}
        scrollLockFunc={handleVerticalScrollLock}
        hidden={false} />
      <SavedNewsHeader />
      <section className="saved-news__card-list">
        <div className="saved-news__card-list-container">
          <NewsCardList />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default SavedNews;
