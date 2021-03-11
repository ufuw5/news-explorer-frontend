import React from 'react';
import PropTypes from 'prop-types';
import './SigninForm.css';

function SigninForm({ onSignup }) {
  function handleOnSignup() {
    onSignup();
  }

  return (
    <form className="signin-form">
      <label className="signin-form__title">Вход</label>
      <label className="signin-form__label">Email</label>
      <input className="signin-form__input" type="email" placeholder="Введите почту" required />
      <p className="signin-form__tip">Неправильный формат email</p>
      <label className="signin-form__label">Пароль</label>
      <input className="signin-form__input" type="password" placeholder="Введите пароль" required />
      <button className="signin-form__submit signin-form__submit_active">Войти</button>
      <p className="signin-form__text">
        {'или '}
       <button className="signin-form__link" onClick={handleOnSignup}>Зарегистрироваться</button>
      </p>
    </form>
  );
}

SigninForm.propTypes = {
  onSignup: PropTypes.func,
};

export default SigninForm;
