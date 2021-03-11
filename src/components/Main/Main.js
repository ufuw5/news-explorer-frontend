import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';

function Main() {
  const [state, setState] = React.useState({});

  function handleOpenSigninForm() {
    setState({ openPopup: true, signinForm: true });
  }

  function handleOpenSignupForm() {
    setState({ openPopup: true, signupForm: true });
  }

  function handleClosePopup() {
    setState({ openPopup: false });
  }

  return (
    <>
      {state.openPopup && <PopupWithForm onClose={handleClosePopup}>
        {state.signinForm && <SigninForm onSignup={handleOpenSignupForm} />}
        {state.signupForm && <SignupForm onSignin={handleOpenSigninForm} />}
      </PopupWithForm>}
      <main className={'main'}>
        <section className="main__header">
          <Header
            theme="dark"
            onAuth={handleOpenSigninForm}
            hidden={state.openPopup} />
          <SearchForm />
        </section>
        <section className="main__search-result">
          <SearchResult />
        </section>
        <About />
        <Footer />
      </main>
    </>
  );
}

export default Main;
