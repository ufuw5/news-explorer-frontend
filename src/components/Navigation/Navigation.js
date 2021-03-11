import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './Navigation.css';

function Navigation({ location }) {
  const menuItems = [
    {
      name: 'Главная',
      to: '/',
    },
    {
      name: 'Сохранённые статьи',
      to: '/saved-news',
    },
  ];

  return (
    <nav className="navigation">
      {menuItems.map((item, index) => <Link
        className={`navigation__link ${location.pathname === item.to ? 'navigation__link_active' : ''}`}
        key={index}
        to={item.to}>
        {item.name}
      </Link>)}
    </nav>
  );
}

Navigation.propTypes = {
  location: PropTypes.object,
};

export default withRouter(Navigation);
