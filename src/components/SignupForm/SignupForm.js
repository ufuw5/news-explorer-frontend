import React from 'react';
import PropTypes from 'prop-types';
import './SignupForm.css';

function SignupForm({ onSignin }) {
  const [status, setStatus] = React.useState({ passed: false });

  function handleOnSignin() {
    onSignin();
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    setStatus({ passed: true });
  }

  return (
    <form className="signup-form" onSubmit={handleOnSubmit}>
      {
        !status.passed && <section className="signup-form__container">
          <label className="signup-form__title">Регистрация</label>
          <label className="signup-form__label">Email</label>
          <input className="signup-form__input" type="email" placeholder="Введите почту" required />
          <label className="signup-form__label">Пароль</label>
          <input className="signup-form__input" type="password" placeholder="Введите пароль" required />
          <label className="signup-form__label">Имя</label>
          <input className="signup-form__input" type="string" placeholder="Введите своё имя" required />
          <p className="signup-form__tip">Неправильный формат email</p>
          <button className="signup-form__submit signup-form__submit_active">Зарегистрироваться</button>
          <p className="signup-form__text">
            {'или '}
            <button className="signup-form__link" onClick={handleOnSignin}>Войти</button>
          </p>
        </section>
      }
      {
        status.passed && <section className="signup-form__end">
          <label className="signup-form__end-title">Пользователь успешно зарегистрирован!</label>
          <button className="signup-form__end-link" onClick={handleOnSignin}>Войти</button>
        </section>
      }
    </form>
  );
}

SignupForm.propTypes = {
  onSignin: PropTypes.func,
};

export default SignupForm;
