import React from 'react';
import './About.css';
import imgAvatar from '../../images/avatar.jpg';

function About() {
  return (
    <figure className="about">
      <img className="about_image" src={imgAvatar} alt="Аватар" />
      <figurecaption>
        <h2 className="about_title">Об авторе</h2>
        <p className="about_subtitle">
          Это блок с описанием автора проекта.
          Здесь следует указать, как вас зовут,
          чем вы занимаетесь,
          какими технологиями разработки владеете.
      </p>
      <p className="about_subtitle">
          Также можно рассказать о процессе обучения в Практикуме,
          чему вы тут научились,
          и чем можете помочь потенциальным заказчикам.
      </p>
      </figurecaption>
    </figure>
  );
}

export default About;
